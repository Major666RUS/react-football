import React from 'react';
import { Table } from 'react-bootstrap';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch("https://soccer.sportmonks.com/api/v2.0/teams/season/16222?api_token=c105cI8atxvUAMopLsiVqrcUHqZhZmh6RvSWXJBOsLiFtVXPWhJW34IVk8la")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.data
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Название команды</th>
              <th>Сокращение</th>
              <th>Год основания</th>
              <th>Логотип</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.items.map((item, index) =>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.short_code}</td>
                  <td>{item.founded}</td>
                  <td><img src={item.logo_path} alt={item.name}/></td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default App;

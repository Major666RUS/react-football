import React from 'react';
import { Table, Form, Button } from 'react-bootstrap';
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
      items: [],
      name: '',
      sortDirection: 'asc',
    }

    this.handleChangeName = this.handleChangeName.bind(this)
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  changeName(id) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) item.isActive = true
        return item
      })
    })

  }

  saveName(id) {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          if (this.state.name !== '') item.name = this.state.name
          item.isActive = false
        }
        return item
      }),
      name: ''
    })
  }

  deleteTeam(id) {
    let index = this.state.items.findIndex(item => item.id === id)
    this.setState({
      items: this.state.items.slice(0, index).concat(this.state.items.slice(index + 1))
    })
  }

  handleEnter(id, e) {
    if (e.key === 'Enter') {
      this.saveName(id)
    }
  }

  sortBy(field) {
    let items = this.state.items.slice()
    let sortDirection = this.state.sortDirection
    items.sort((a, b) => {
      if (a[field] < b[field]) {
        return sortDirection === 'desc' ? 1 : -1
      }
      if (a[field] > b[field]) {
        return sortDirection === 'desc' ? -1 : 1
      }
      return 0
    })
    this.setState({
      items: items,
      sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc'
    })
  }

  componentDidMount() {
    fetch("https://soccer.sportmonks.com/api/v2.0/teams/season/16222?api_token=c105cI8atxvUAMopLsiVqrcUHqZhZmh6RvSWXJBOsLiFtVXPWhJW34IVk8la")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.data.map(item => {
              item.isActive = false
              return item
            })
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
              <th onClick={this.sortBy.bind(this, 'name')}>Название команды</th>
              <th>Сокращение</th>
              <th onClick={this.sortBy.bind(this, 'founded')}>Год основания</th>
              <th>Логотип</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.items.map((item, index) =>
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td onClick={this.changeName.bind(this, item.id)}>
                    { item.isActive ? (
                      <Form.Group controlId="Name">
                        <Form.Label>Название команды</Form.Label>
                        <Form.Control 
                          autoFocus
                          placeholder="Название"
                          onBlur={this.saveName.bind(this, item.id)}
                          onKeyDown={(e) => this.handleEnter(item.id, e)}
                          className="text-muted"
                          value={this.state.name} 
                          onChange={this.handleChangeName}
                        />
                      </Form.Group>
                    ) : ( item.name
                    )}
                  </td>
                  <td>{item.short_code}</td>
                  <td>{item.founded}</td>
                  <td><img src={item.logo_path} alt={item.name} width="75" height="75"/></td>
                  <td><Button variant="danger" onClick={this.deleteTeam.bind(this, item.id)}>Удалить</Button></td>
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

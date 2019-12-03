import React from 'react'
import Moment from 'react-moment'
import Flag from 'react-world-flags'
import Countries from './countries.json'
import { Table, Pagination } from 'react-bootstrap'

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squad: [],
      name: '',
      sortDirection: 'asc',
    }
  }

  sortBy(field) {
    let items = this.state.squad.slice()
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
      squad: items,
      sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc'
    })
  }

  componentDidMount() {
    const { params } = this.props.match
    fetch(`https://api.football-data.org/v2/teams/${params.id}`, {
      headers: {
        'X-Auth-Token': '6324a72164424ef6ae805e7e77ba04a8'
      }
    })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          squad: result.squad
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
    function findCountryCode(nationality) {
      const entry = Object.entries(Countries).find((country) => country[1] === nationality)
      return entry ? entry[0] : '_unknown'
    }

    let active = 1
    let items = []
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      )
    }

    return (
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th onClick={this.sortBy.bind(this, 'name')}>Имя и фамилия</th>
              <th>Позиция на поле</th>
              <th>Национальность</th>
              <th onClick={this.sortBy.bind(this, 'dateOfBirth')}>Дата рождения</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.squad.map((item, index) =>
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>        
                    <Flag 
                      code={findCountryCode(item.nationality)} 
                      className="flagImage"
                      width={100}
                      alt={item.nationality}
                      fallback={ <span className="flagImage">No image</span> }
                    />{item.nationality}
                </td>
                  <td><Moment format="DD.MM.YYYY" date={item.dateOfBirth}/></td>
                </tr>
              )
            }
          </tbody>
        </Table>
        <div className="d-flex justify-content-center">
          <Pagination>{items}</Pagination>
        </div>
      </div>
    )
  }
}

export default Team
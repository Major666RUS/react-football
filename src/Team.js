/* eslint-disable array-callback-return */
import React from 'react'
import Moment from 'react-moment'
import Flag from 'react-world-flags'
import Countries from './countries.json'
import { Table, Form, Pagination } from 'react-bootstrap'

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squad: [],
      name: '',
      filters: {
        position: '',
        nationality: '',
      },
      sortDirection: 'asc',
    }
    this.handleChangeNationality = this.handleChangeNationality.bind(this)
    this.handleChangePosition = this.handleChangePosition.bind(this)
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

  handleChangeNationality(event) {
    this.setState({filters: {
      nationality: event.target.value,
      position: this.state.filters.position
    }});
  }

  handleChangePosition(event) {
    this.setState({filters: {
      position: event.target.value,
      nationality: this.state.filters.nationality
    }});
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
          squad: result.squad.map(item => {
            if (!item.position) item.position = 'Coach'
            return item
          })
        })
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        this.setState({
          error
        })
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
              <th onClick={this.sortBy.bind(this, 'name')} className="pointer">Имя и фамилия</th>
              <th>
                <span>Позиция на поле</span>
                <Form.Control 
                  as="select"
                  value={this.state.filters.position} 
                  onChange={this.handleChangePosition}
                >
                <option key="0" value="">Все</option>
                  {
                    Array.from(new Set(this.state.squad.map(item => item.position)))
                      .map((item, index) =>
                        <option key={index + 1} value={item}>{item}</option>
                    )
                  }
                </Form.Control>
              </th>
              <th>
                <span>Национальность</span>
                <Form.Control 
                  as="select"
                  value={this.state.filters.nationality} 
                  onChange={this.handleChangeNationality}
                >
                <option key="0" value="">Все</option>
                  {
                    Array.from(new Set(this.state.squad.map(item => item.nationality)))
                      .map((item, index) =>
                        <option key={index + 1} value={item}>{item}</option>
                    )
                  }
                </Form.Control>
              </th>
              <th onClick={this.sortBy.bind(this, 'dateOfBirth')} className="pointer">Дата рождения</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.squad
              .filter(item => {
                let nationality = this.state.filters.nationality
                if (!nationality) return item
                else if (item.nationality === nationality) return item
              })
              .filter(item => {
                let position = this.state.filters.position
                if (!position) return item
                else if (item.position === position) return item
              })
              .map((item, index) =>
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
import React from 'react'
import { connect } from 'react-redux';
import store from './store';
import { Link } from 'react-router-dom'
import { Table, Form, Button } from 'react-bootstrap';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teams: [],
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
      teams: this.state.teams.map(team => {
        if (team.id === id) team.isActive = true
        return team
      })
    })
  }

  saveName(id) {
    this.setState({
      teams: this.state.teams.map(team => {
        if (team.id === id) {
          if (this.state.name !== '') team.name = this.state.name
          team.isActive = false
        }
        return team
      }),
      name: ''
    })
  }

  deleteTeam(id) {
    let index = this.state.teams.findIndex(team => team.id === id)
    this.setState({
      teams: this.state.teams.slice(0, index).concat(this.state.teams.slice(index + 1))
    })
  }

  handleEnter(id, e) {
    if (e.key === 'Enter') {
      this.saveName(id)
    }
  }

  sortBy(field) {
    let teams = this.state.teams.slice()
    let sortDirection = this.state.sortDirection
    teams.sort((a, b) => {
      if (a[field] < b[field]) {
        return sortDirection === 'desc' ? 1 : -1
      }
      if (a[field] > b[field]) {
        return sortDirection === 'desc' ? -1 : 1
      }
      return 0
    })
    this.setState({
      teams: teams,
      sortDirection: this.state.sortDirection === 'asc' ? 'desc' : 'asc'
    })
  }

  componentDidMount() {
    fetch('https://api.football-data.org/v2/competitions/2021/teams?season=2019', {
      headers: {
        'X-Auth-Token': process.env.API_TOKEN
      }
    })
    .then(data => data.json())
    .then((res) => {
        // this.setState({
        //   teams: res.teams.map(team => {
        //     team.isActive = false
        //     return team
        //   })
        // })
        store.dispatch({
          type: 'SET_TEAMS',
          users: res.teams.map(team => {
            team.isActive = false
            return team
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
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={this.sortBy.bind(this, 'name')} className="pointer">Название команды</th>
            <th>Сокращение</th>
            <th>Стадион</th>
            <th onClick={this.sortBy.bind(this, 'founded')} className="pointer">Год основания</th>
            <th>Логотип</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.teams.map((team, index) =>
              <tr key={team.id}>
                <td>{index + 1}</td>
                <td onClick={this.changeName.bind(this, team.id)}>
                  { team.isActive ? (
                    <Form.Group controlId="Name">
                      <Form.Label>Название команды</Form.Label>
                      <Form.Control 
                        autoFocus
                        placeholder="Название"
                        onBlur={this.saveName.bind(this, team.id)}
                        onKeyDown={(e) => this.handleEnter(team.id, e)}
                        className="text-muted"
                        value={this.state.name} 
                        onChange={this.handleChangeName}
                      />
                    </Form.Group>
                  ) : ( team.name
                  )}
                </td>
                <td>{team.tla}</td>
                <td>{team.venue}</td>
                <td>{team.founded}</td>
                <td><img src={team.crestUrl} alt={team.name} width="75" height="75"/></td>
                <td>
                  <Link to={`/teams/${team.id}`}>
                    <Button variant="primary">Подробнее</Button>
                  </Link>
                  <Button variant="danger" onClick={this.deleteTeam.bind(this, team.id)}>Удалить</Button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    teams: store.listState.teams
  }
}

export default connect(mapStateToProps)(List)
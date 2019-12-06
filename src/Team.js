/* eslint-disable array-callback-return */
import React from 'react'
import { connect } from 'react-redux';
import store from './store';
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
      pages: 0,
      perPage: 10,
      currentPage: 1,
      sortDirection: 'asc',
    }
    this.handleChangeNationality = this.handleChangeNationality.bind(this)
    this.handleChangePosition = this.handleChangePosition.bind(this)
    this.changePage = this.changePage.bind(this)
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

  changePage(page) {
    this.setState({currentPage: page})
  }

  componentDidMount() {
    const { params } = this.props.match
    fetch(`https://api.football-data.org/v2/teams/${params.id}`, {
      headers: {
        'X-Auth-Token': '6324a72164424ef6ae805e7e77ba04a8'
      }
    })
    .then(data => data.json())
    .then(
      (res) => {

        store.dispatch({
          type: 'SET_PLAYERS',
          squad: res.squad.map(item => {
            if (!item.position) item.position = 'Coach'
            return item
          }),
        })

        store.dispatch({
          type: 'SET_PAGES',
          pages: Math.ceil(res.squad.length / 10)
        })


        // this.setState({
        //   squad: result.squad.map(item => {
        //     if (!item.position) item.position = 'Coach'
        //     return item
        //   }),
        //   pages: Math.ceil(result.squad.length / 10)
        // })
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

    let items = []
    for (let page = 1; page <= store.getState().teamState.pages; page++) {
      items.push(
        <Pagination.Item 
          key={page} 
          active={page === this.state.currentPage}
          onClick={() => this.changePage(page)}
        >
          {page}
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
                    Array.from(new Set(store.getState().teamState.squad.map(item => item.position)))
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
                    Array.from(new Set(store.getState().teamState.squad.map(item => item.nationality)))
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
              store.getState().teamState.squad
              .filter(item => {
                let nationality = this.state.filters.nationality,
                    position = this.state.filters.position
                if ((!nationality || item.nationality === nationality)
                && (!position || item.position === position)) return item
              })
              .filter((item, i) => {
                let current = this.state.currentPage,
                    perPage = this.state.perPage
                if ((i < current * perPage) && (i >= ((current - 1) * perPage))) return item
              })
              .map((item, index) =>
                <tr key={item.id}>
                  <td>{(this.state.currentPage - 1) * this.state.perPage + index + 1}</td>
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
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            {/* {this.state.currentPage - 2 > 1 &&
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />
            } */}
            {items}
            {/* {search.page + 2 < search.pages &&
              <Pagination.Ellipsis />
              <Pagination.Item>{search.pages}</Pagination.Item>
            } */}
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    squad: store.teamState.squad,
    pages: store.teamState.pages,
  }
}

export default connect(mapStateToProps)(Team)
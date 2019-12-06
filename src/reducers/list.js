import {
  SET_TEAMS
} from '../actions/list'

const initialState = {
  teams: []
}

function listReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEAMS:
      return Object.assign({}, state, {
        teams: action.teams
      })
    default:
      return state
  }
}

export default listReducer
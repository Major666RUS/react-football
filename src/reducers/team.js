import {
    SET_PLAYERS,
    SET_PAGES
  } from '../actions/team'
  
  const initialState = {
    squad: []
  }
  
  function teamReducer(state = initialState, action) {
    switch (action.type) {
      case SET_PLAYERS:
        return Object.assign({}, state, {
            squad: action.squad
        })
      case SET_PAGES:
        return Object.assign({}, state, {
            pages: action.pages
        })
      default:
        return state
    }
  }
  
  export default teamReducer
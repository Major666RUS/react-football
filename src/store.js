import { createStore, combineReducers } from 'redux'
import listReducer from './reducers/list'
import teamReducer from './reducers/team'

const reducers = combineReducers({
  listState: listReducer,
  teamState: teamReducer,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
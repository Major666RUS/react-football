import { createStore, combineReducers } from 'redux'
import listReducer from './reducers/list'

const reducers = combineReducers({
    listState: listReducer,
})

const store = createStore(reducers)

export default store
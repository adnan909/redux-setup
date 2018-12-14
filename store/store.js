import { combineReducers, createStore } from 'redux'

import counterReducer from './reducers/counter'

const AppReducers = combineReducers({
    counterReducer
})

const rootReducer = (state, action) => {
    return AppReducers(state, action)
}


const store = createStore(rootReducer)

export default store
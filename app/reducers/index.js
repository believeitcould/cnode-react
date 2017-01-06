import { combineReducers } from 'redux'
import switchPage from './switchPage'
import progressBar from './progressBar'
const reducer = combineReducers({
    switchPage,
    progressBar
})

export default reducer

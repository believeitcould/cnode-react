import { combineReducers } from 'redux'
import switchPage from './switchPage'
import progressBar from './progressBar'
import topicDetail from './topicDetail'
const reducer = combineReducers({
    switchPage,
    progressBar,
    topicDetail
})

export default reducer

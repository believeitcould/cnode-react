import { combineReducers } from 'redux'
import switchPage from './switchPage'
import progressBar from './progressBar'
import topicDetail from './topicDetail'
import userDetail from './userDetail'
const reducer = combineReducers({
    switchPage,
    progressBar,
    topicDetail,
    userDetail
})

export default reducer

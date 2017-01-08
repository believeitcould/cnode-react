import { connect } from 'react-redux'
import { getTopicDetail, changeRepliesPage } from '../actions'
import TopicDetail from '../components/TopicDetail'

const mapStateToProps = (state, ownProps) => ({
    details: state.topicDetail.details,
    repliesPageIndex: state.topicDetail.repliesPageIndex
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getTopicDetail: (topicId) => {
        dispatch(getTopicDetail(topicId))
    },
    changeRepliesPage: (index) => {
        dispatch(changeRepliesPage(index))
    }
})

const TopicDetailCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopicDetail)

export default TopicDetailCon

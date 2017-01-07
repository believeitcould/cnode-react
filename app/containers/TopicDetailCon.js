import { connect } from 'react-redux'
import { getTopicDetail } from '../actions'
import TopicDetail from '../components/TopicDetail'

const mapStateToProps = (state, ownProps) => ({
    data: state.topicDetail.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getTopicDetail: (topicId) => {
        dispatch(getTopicDetail(topicId))
    }
})

const TopicDetailCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopicDetail)

export default TopicDetailCon

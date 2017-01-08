let initialState = {
    details: '',
    repliesPageIndex: 1
}

const topicDetail = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }
    switch(action.type) {
        case 'TOPIC_DETAIL_FETCH_DATA_SUCCESS':
            return {
                details: action.message,
                repliesPageIndex: state.repliesPageIndex
            }
        case 'CHANGE_REPLIES_PAGE':
            return {
                details: state.details,
                repliesPageIndex: action.index
            }
        default:
            return state
    }
}

export default topicDetail
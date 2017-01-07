let initialState = {
    
}

const topicDetail = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }
    switch(action.type) {
        case 'TOPIC_DETAIL_FETCH_DATA_SUCCESS':
            return action.message
        default:
            return state
    }
}

export default topicDetail
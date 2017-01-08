// export const switchPage = (index) => ({
//     type: 'SWITCH_PAGE',
//     index
// })

export const getThenShow = (index = 1, tab = "") => (dispatch, getState) => {
    
    dispatch({
        type: 'SHOW_PROGRESS'
    })
    
    let url = `http://cnodejs.org/api/v1/topics?limit=20&mdrender=false&page=${index}&tab=${tab}`
    fetch(url)
        .then(response => {
            return response.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e,
            })
        })
        .then(data => {
            dispatch({
                type: 'FETCH_DATA_SUCCESS',
                message: data,
            })
            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}

export const getTopicDetail = (topicId) => (dispatch, getState) => {
    
    dispatch({
        type: 'SHOW_PROGRESS'
    })
    
    let url = `http://cnodejs.org/api/v1/topic/${topicId}`
    fetch(url)
        .then(response => {
            return response.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e,
            })
        })
        .then(data => {
            dispatch({
                type: 'TOPIC_DETAIL_FETCH_DATA_SUCCESS',
                message: data,
            })
            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}
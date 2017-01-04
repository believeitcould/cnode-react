// export const switchPage = (index) => ({
//     type: 'SWITCH_PAGE',
//     index
// })

export const getThenShow = (index = 1) => (dispatch, getState) => {
    let url = `http://cnodejs.org/api/v1/topics?limit=20&mdrender=false&page=${index}`

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
        })
}
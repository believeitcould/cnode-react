const switchPage = (state = {}, action) => {
    if (typeof state == 'undefined') {
        return []
    }
    switch(action.type) {
        case 'FETCH_DATA_SUCCESS':
            console.log(action.message)
            return {
                data: action.message.data
            }
        default:
            return state
    }
}

export default switchPage
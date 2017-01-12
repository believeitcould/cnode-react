let initialState = {
    tab: '',
    pageIndex: 1
}

const switchPage = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }
    switch(action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                pageIndex: state.pageIndex,
                data: action.message.data
            }
        case 'SWITCH_PAGINATION':
            return {
                pageIndex: action.pageIndex,
                data: state.data
            }
        
        default:
            return state
    }
}

export default switchPage
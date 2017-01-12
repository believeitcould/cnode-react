import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import { getThenShow } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    loaded: state.switchPage.tab == ownProps.tab,
    item: state.switchPage.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getIndexData: () => {
        dispatch(getThenShow(ownProps.pageIndex, ownProps.tab))
    }
})

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem)

export default List

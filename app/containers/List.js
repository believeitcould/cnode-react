import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import { getThenShow } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    item: state.switchPage.data
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getIndexData: () => {
        dispatch(getThenShow())
    }
})

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem)

export default List

import { connect } from 'react-redux'
import ListItem from '../components/ListItem'

const mapStateToProps = (state, ownProps) => {
    let data = state.switchPage.data ? state.switchPage.data : []
    return {item: data}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    
})

const List = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem)

export default List

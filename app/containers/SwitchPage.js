import { connect } from 'react-redux'
import { getThenShow } from '../actions'
import Pagination from '../components/Pagination'

const mapStateToProps = (state, ownProps) => ({
    pageIndex: ownProps.pageIndex,
    tab: state.switchPage.tab
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (index, tab) => {
        dispatch(getThenShow(index, tab))
    }
})

const SwitchPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)

export default SwitchPage

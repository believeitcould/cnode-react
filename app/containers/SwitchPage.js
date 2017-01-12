import { connect } from 'react-redux'
import { getThenShow } from '../actions'
import Pagination from '../components/Pagination'

const mapStateToProps = (state, ownProps) => ({
    pageIndex: state.switchPage.pageIndex,
    tab: ownProps.tab
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (index) => {
        dispatch(getThenShow(index, ownProps.tab))
    }
})

const SwitchPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)

export default SwitchPage

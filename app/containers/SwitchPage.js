import { connect } from 'react-redux'
import { getThenShow } from '../actions'
import Pagination from '../components/Pagination'

const mapStateToProps = (state, ownProps) => ({
    a: 1
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onChange: (index) => {
        dispatch(getThenShow(index))
    }
})

const SwitchPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)

export default SwitchPage

import { connect } from 'react-redux'
import { getThenShow } from '../actions'
import Pagination from '../components/Pagination'

const mapStateToProps = (state, ownProps) => ({

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

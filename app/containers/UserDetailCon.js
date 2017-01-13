import { connect } from 'react-redux'
import { getUserDetail } from '../actions'
import UserDetail from '../components/UserDetail'

const mapStateToProps = (state, ownProps) => ({
    details: state.userDetail
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getUserDetail: () => {
        dispatch(getUserDetail(ownProps.username))
    }
})

const UserDetailCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetail)

export default UserDetailCon

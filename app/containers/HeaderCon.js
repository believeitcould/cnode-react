import { connect } from 'react-redux'
import Header from '../components/Header'
import { getThenShow } from '../actions'

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // onClick: (index, tab) => {
    //     dispatch(getThenShow(index, tab))
    // }
    onClick: () => {
        console.log('Header')
        console.log(ownProps)
    }
})

const HeaderCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderCon

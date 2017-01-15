import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import { browserHistory } from 'react-router'
import HeaderCon from '../containers/HeaderCon'
import Content from '../components/Content'
import TopicDetailCon from '../containers/TopicDetailCon'

export default class Detail extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.router.setRouteLeaveHook(
        	this.props.route, 
        	this.routerWillLeave
      	)
	}

	routerWillLeave(nextLocation) {

	  	// @user
	  	let reg = /user/g
	  	console.log(nextLocation)
		let path = nextLocation.pathname
		let username = path.split('/')[2]
		console.log(username)
		// browserHistory.push('/u/path')
        return '确认要离开'
    }

	render() {
		return (
			<div>
				<TopicDetailCon topicId={this.props.params.id} />
			</div>
		)
	}
}


const styles = {
	
}
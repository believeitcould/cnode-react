import React from 'react'
import { render } from 'react-dom'
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

	  	return true
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
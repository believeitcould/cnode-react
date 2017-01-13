import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import HeaderCon from '../containers/HeaderCon'
import Content from '../components/Content'
import TopicDetailCon from '../containers/TopicDetailCon'

export default class Detail extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {

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
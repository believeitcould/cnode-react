import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
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
				<TopicDetailCon topicId={this.props.params.id}>author</TopicDetailCon>
			</div>
		)
	}
}


const styles = {
	
}
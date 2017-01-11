import React from 'react'
import { render } from 'react-dom'
import HeaderCon from '../containers/HeaderCon'
import Content from '../components/Content'

export default class Detail extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		document.title = `@${this.props.params.name}`
	}

	render() {
		return (
			<div>
				{this.props.params.name}
			</div>
		)
	}
}


const styles = {
	
}
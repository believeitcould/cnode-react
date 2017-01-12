import React from 'react'
import { render } from 'react-dom'
import HeaderCon from '../containers/HeaderCon'
import Content from '../components/Content'

export default class Detail extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// document.title = `@${this.props.params.name}`
		console.log('user mount')
	}

	render() {
		console.log('user')
		return (
			<div>
				uuu
			</div>
		)
	}
}


const styles = {
	
}
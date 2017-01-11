import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import HeaderCon from '../containers/HeaderCon'
import SwitchPage from '../containers/SwitchPage'
import Content from '../components/Content'
import List from '../containers/List'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		document.title = 'CNode'
		
	}

	render() {
		let path = this.props.location.pathname
		let tab = path.substr(1)
		console.log(tab+123)
		return (
			<div>
				<HeaderCon tab="cnode" />
				<SwitchPage tab={tab} pageIndex={1} />
				<Content>
					<List tab={tab} pageIndex={1} />
				</Content>
			</div>
		)
	}
}


const styles = {
	
}
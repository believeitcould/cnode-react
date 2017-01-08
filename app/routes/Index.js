import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import SwitchPage from '../containers/SwitchPage'
import Content from '../components/Content'
import List from '../containers/List'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<SwitchPage tab="all" pageIndex={1} />
				<Content>
					<List />
				</Content>
			</div>
		)
	}
}


const styles = {
	
}
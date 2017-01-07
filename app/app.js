import React from 'react'
import { render } from 'react-dom'
// import './css/app.css'
import { Button, Menu, Breadcrumb, Layout } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router'
// import Promise from 'bluebird'
import HeaderCon from './containers/HeaderCon'
import SwitchPage from './containers/SwitchPage'
import Content from './components/Content'
import List from './containers/List'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
	}


	componentDidMount() {
	}

	render() {
		return (
			<div>
				<HeaderCon tab="all" />
				<SwitchPage tab="all" pageIndex={2} />
				<Content>
					<List />
				</Content>
			</div>
			)
	}
}


const styles = {
	
}
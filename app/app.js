import React from 'react'
import { render } from 'react-dom'
// import './css/app.css'
import { Button, Menu, Breadcrumb, Layout } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router'
// import Promise from 'bluebird'
import Header from './components/Header'
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
				<Header />
				<SwitchPage />
				<Content>
					<List />
				</Content>
			</div>
			)
	}
}


const styles = {
	
}
import React from 'react'
import { render } from 'react-dom'
// import './css/app.css'
import { Button, Menu, Breadcrumb, Layout } from 'antd'
import 'antd/dist/antd.css'
import { Link } from 'react-router'
import HeaderCon from './containers/HeaderCon'

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
				{this.props.children}
			</div>
		)
	}
}


const styles = {
	
}
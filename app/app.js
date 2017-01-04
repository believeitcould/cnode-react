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
import List from './components/ListItem'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			item: []
		}
	}

	handleClick(e) {
		this.setState({
			h: 'blue',
			panelText : 'tt'
		})
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<div>
				<Header />
				<SwitchPage />
				<Content>
				{this.state.item.length == 0 ?
								''
								:
								<List item={this.state.item}/>
							}
				</Content>
				
			</div>
			)
	}
}


const styles = {
	
}
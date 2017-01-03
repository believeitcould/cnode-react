import React from 'react';
import { render } from 'react-dom';
// import './css/app.css';
import { Button, Menu, Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router';
// import Promise from 'bluebird';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Content from './components/Content';
import List from './components/ListItem';

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: []
		}
	}

	handleClick(e) {
		this.setState({
			h: 'blue',
			panelText : 'tt'
		});
	}

	componentDidMount() {
		let t = Date.parse('2016-12-23T22:33:39.421+08:00');
		let now = new Date().getTime();
		var s = (now - t) / 1000;
		let timeStr = '';
		if (s < 60) {
			timeStr = parseInt(s) + '秒前';
		}else if ((s/60) < 60) {
			timeStr = parseInt(s/60) + '分钟前';
		}else if ((s/60/60) < 24) {
			timeStr = parseInt(s/60/60) + '小时前';
		}else {
			timeStr = parseInt(s/60/60/24) + '天前';
		}
		console.log(timeStr);

		fetch('http://cnodejs.org/api/v1/topics?limit=20&mdrender=false')
			.then(res => res.json())
			.then((res) => {
				this.setState({
					item: res
				})
			})
	}

	render() {
		return (
			<div>
				<Header />
				<Pagination />
				<Content>
				{this.state.item.length == 0 ?
								''
								:
								<List item={this.state.item}/>
							}
				</Content>
				
			</div>
			);
	}
}


const styles = {
	
}
import React from 'react'
import { render } from 'react-dom'
import { Button, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router'

class ListItem extends React.Component {

	formatDate(date) {
		let t = Date.parse(date);
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
		return timeStr;
	}

    render() {
        return (
            <div style={styles.box}>
				<img style={styles.avatar} src={this.props.item.author.avatar_url}/>
				<Link style={styles.title}>{this.props.item.title}</Link>
				<span style={styles.lastReply}>{this.formatDate(this.props.item.last_reply_at)}</span>
			</div>
        )
    }
}

export default class List extends React.Component {

    render() {
		console.log(this.props.item)
        return (
			<div>
            {	
				this.props.item 
				?
				(this.props.item).map((ele)=>{
					return <ListItem item={ele} />
				})
				:
				''
			}
			</div>
        )
    }
}

const styles = {
	box: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		padding: '10px',
	},
	avatar: {
		width: '40px',
		height: '40px',
		borderRadius: '3px',
		marginRight: '30px'
	},
	title: {
		flex: 1
	},
	lastReply: {

	}
}
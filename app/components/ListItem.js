import React from 'react'
import { render } from 'react-dom'
import { Button, Menu, Breadcrumb } from 'antd'
import { Link } from 'react-router'
import Time from './Time'


class ListItem extends React.Component {

    render() {
        return (
            <div style={styles.box}>
				<img style={styles.avatar} src={this.props.item.author.avatar_url} />
				<Link style={styles.title} to={"/detail/"+this.props.item.id}>{this.props.item.title}</Link>
				<span style={styles.lastReply}>{Time(this.props.item.last_reply_at)}</span>
			</div>
        )
    }
}

export default class List extends React.Component {

    render() {
        return (
			<div>
            {	
				this.props.item 
				?
				(this.props.item).map((ele, index)=>{
					return <ListItem item={ele} key={index} />
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
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

	componentDidMount() {
		console.log('list did mount')
		// if(this.props.loaded) this.props.getIndexData()
		// console.log('list did mount' + this.props.loaded)
		this.props.getIndexData()
	}

	componentDidUpdate(prevProps) {
		console.log('list did update')
		if (prevProps.tab !== this.props.tab) {
			this.props.getIndexData()
		}
	}

    render() {
		let item = this.props.item
		if (!item) return ( <div></div> )
        
		return (
			<div>
            {	
				item.map((ele, index)=>{
					return <ListItem item={ele} key={index} />
				})
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
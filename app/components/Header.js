import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'


class Inner extends React.Component {
    
    render () {
        return (
            <div style={styles.inner}>
                <Link style={styles.logo} to="/">CNode</Link>
                <Link style={styles.link} to="/">全部</Link>
                <Link style={styles.link} to="/good">精华</Link>
                <Link style={styles.link} to="/share">分享</Link>
                <Link style={styles.link} to="/ask">问答</Link>
                <Link style={styles.link} to="/job">工作</Link>
                <span style={styles.txt}>Built with React</span>
            </div>
        )
    }
}

export default class Header extends React.Component {
    render() {
		return (
            <header style={styles.header}>
                <Inner onClick={this.props.onClick} />
            </header>
        )
    }
}

const styles = {
	header: {
		backgroundColor: '#f60',
		
	},
    inner: {
        maxWidth: '800px',
        boxSizing: 'borderBox',
        margin: '0 auto',
        padding: '15px 5px'
    },
    logo: {
        color: '#fff',
        fontSize: '16px',
        marginRight: '1.8em',
        border: '2px solid #fff',
        borderRadius: '5px',
        padding: '5px'
    },
    link: {
        color: '#fff',
        fontSize: '16px',
        marginRight: '1.8em'
    },
    txt: {
        color: '#fff',
        fontSize: '16px',
        float: 'right'
    }
}
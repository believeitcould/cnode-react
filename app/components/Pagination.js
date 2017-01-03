import React from 'react'
import { render } from 'react-dom'
import { Pagination } from 'antd'

export default class extends React.Component {
    render() {
		return (
            <div style={styles.box}>
                <Pagination simple defaultCurrent={2} total={50} />
            </div>
        )
    }
}

const styles = {
    box: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        padding: '15px 30px',
        position: 'fixed',
        top: '55px',
        left: 0,
        right: 0,
        zIndex: 998,
        boxShadow: '0 1px 2px rgba(0,0,0,.1)',
        display: 'flex',
        justifyContent: 'center'
    }
}
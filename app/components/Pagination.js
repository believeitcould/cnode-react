import React from 'react'
import { Pagination } from 'antd'
import { render } from 'react-dom'

class Page extends React.Component {
    render() {
		return (
            <div style={styles.box}>
                <Pagination simple defaultCurrent={this.props.pageIndex} current={this.props.pageIndex} total={200} onChange={(index)=>this.props.onChange(index)} />
            </div>
        )
    }
}

const styles = {
    box: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        padding: '15px 30px',
        boxShadow: '0 1px 2px rgba(0,0,0,.1)',
        display: 'flex',
        justifyContent: 'center'
    }
}
export default Page
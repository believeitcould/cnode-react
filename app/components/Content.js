import React from 'react'
import { render } from 'react-dom'

export default class extends React.Component {
    render() {
		return (
            <div style={styles.box}>
                {this.props.children}
            </div>
        )
    }
}

const styles = {
    box: {
        backgroundColor: '#fff',
        borderRadius: '4px',
        margin: '40px auto 30px',
        width: '800px'
    }
}
import React from 'react'
import { Pagination } from 'antd'

const page = ({ pageIndex, onChange }) => {

    return (
        <div style={styles.box}>
            <Pagination simple defaultCurrent={pageIndex} total={200} onChange={onChange} />
        </div>
    )
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
export default page
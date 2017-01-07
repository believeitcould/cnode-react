import React from 'react'
import { render } from 'react-dom'

const Author = ({ title, avatar, loginname, createAt, content}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div style={{margin:'5px 0',display:'flex',alignItems:'center'}}>
                <img style={styles.avatar} src={avatar} />
                <span style={{margin:'0 10px'}}>{loginname}</span>
                <span>{createAt}</span>
            </div>
            <hr />
            {content}
        </div>
    )
}

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let topicId = this.props.topicId
        this.props.getTopicDetail(topicId)
    }

    render() {
        let data = this.props.data

        if (!data) {
            return (<div></div>)
        }

		return (
            <div>
                <div style={styles.box}>
                    <Author title={data.title} 
                            avatar={data.author.avatar_url} 
                            loginname={data.author.loginname} 
                            createAt={data.create_at}
                            content={data.content} />
                    {this.props.children}
                </div>
                <div style={styles.box}>
                    replies
                </div>
            </div>
            
        )
    }
}

const styles = {
    box: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        margin: '40px auto 30px',
        width: '800px',
        padding: '10px'
    },
    avatar: {
        width: '40px',
		height: '40px',
    }
}
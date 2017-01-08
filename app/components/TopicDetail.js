import React from 'react'
import { render } from 'react-dom'
// import marked from 'marked'
import '../css/TopicDetail.css'
import Time from './Time'

const Author = ({ title, avatar, loginname, createAt, content}) => {

    return (
        <div>
            <h3>{title}</h3>
            <div style={{margin:'5px 0',display:'flex',alignItems:'center'}}>
                <img style={styles.avatar} src={avatar} />
                <span style={{margin:'0 10px'}}>{loginname}</span>
                <span>{Time(createAt)}</span>
            </div>
            <hr />
            <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
    )
}

const Replies = ({ replies }) => {
    return (
        <div style={styles.repliesBox}>
            <RepliesCount count={replies.length} />
            <RepliesList replies={replies} />
        </div>
    )
}

const RepliesCount = ({ count }) => {
    return (
        <div style={{backgroundColor:'rgb(230,230,230)',padding:'10px',borderTopLeftRadius:'4px',borderTopRightRadius:'4px'}}>
            {count} 回复
        </div>
    )
}

const RepliesList = ({ replies }) => {
    return (
        <div>
            {
                replies.map((ele, index)=>{
                    return (
                        <div key={index} style={styles.repliesItem}>
                            <img style={styles.repliesAvatar} src={ele.author.avatar_url} />
                            <span style={{margin:'0 10px'}}>{ele.author.loginname}</span>
                            <span>{Time(ele.create_at)}</span>
                            <div style={{margin:'10px 0 0 40px'}} 
                                 dangerouslySetInnerHTML={{__html: ele.content}} />
                        </div>
                    ) 
                })
            }
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
                {/* 无回复的帖子 不显示Replies */}
                {data.replies.length != 0 ? <Replies replies={data.replies} /> : ''}
            </div>
            
        )
    }
}

const styles = {
    box: {
        backgroundColor: '#fff',
        borderRadius: '4px',
        margin: '40px auto 30px',
        width: '800px',
        padding: '10px',
    },
    avatar: {
        width: '40px',
		height: '40px',
        borderRadius: '3px'
    },
    repliesBox: {
        backgroundColor: '#fff',
        borderRadius: '4px',
        margin: '40px auto 30px',
        width: '800px',
    },
    repliesItem: {
        padding: '10px',
        borderTop: '1px solid #f0f0f0',

    },
    repliesAvatar: {
        width: '30px',
		height: '30px',
        borderRadius: '3px'
    }
}
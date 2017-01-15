import React from 'react'
import { render } from 'react-dom'
// import marked from 'marked'
import { Pagination } from 'antd'
// import '../css/TopicDetail.css'
import 'github-markdown-css'
import { Link } from 'react-router'
import Time from './Time'

const Author = ({ title, avatar, loginname, createAt, content}) => {

    return (
        <div>
            <h3>{title}</h3>
            <div style={{margin:'5px 0',display:'flex',alignItems:'center'}}>
                <Link to={`/u/${loginname}`}>
                    <img style={styles.avatar} src={avatar} />
                </Link>
                <span style={{margin:'0 10px'}}>{loginname}</span>
                <span>{Time(createAt)}</span>
            </div>
            
            <div dangerouslySetInnerHTML={{__html: content}} className="markdown-body" />
        </div>
    )
}

const Replies = ({ replies, onChangeRepliesPageIndex, repliesPageIndex }) => {
    // 每页评论数 当前页数
    let pageSize = 20
    
    let onPageChange = (index) => {
        {/* dispatch action 重新render replies分页数据 */}
        onChangeRepliesPageIndex(index)
    }
    return (
        <div style={styles.repliesBox}>
            <RepliesCount count={replies.length} />
            <RepliesList replies={replies.slice((repliesPageIndex-1)*pageSize,repliesPageIndex*pageSize)} />
            <Pagination style={{marginTop:'20px',marginLeft:'0'}}
                        defaultCurrent={repliesPageIndex} 
                        defaultPageSize={pageSize} 
                        total={replies.length}
                        onChange={onPageChange} />
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
                            <div style={{display:'flex',alignItems:'center'}}>
                                <Link to={`/u/${ele.author.loginname}`}>
                                    <img style={styles.repliesAvatar} src={ele.author.avatar_url} />
                                </Link>
                                <span style={{margin:'0 10px'}}>{ele.author.loginname}</span>
                                <span>{Time(ele.create_at)}</span>
                            </div>
                            
                            <div style={{margin:'10px 0 0 40px'}} 
                                 dangerouslySetInnerHTML={{__html: ele.content}} className="markdown-body" />
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
        let data = this.props.details.data
        // 1.state不存在时显示空  2.当前id与state.id不同时显示空
        if (!data || data.id != this.props.topicId) {
            return (<div></div>)
        }

        // 页面title
        document.title = data.title
		
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
                {data.replies.length != 0 
                    ? 
                    <Replies replies={data.replies} 
                             onChangeRepliesPageIndex={this.props.changeRepliesPage} 
                             repliesPageIndex={this.props.repliesPageIndex} /> 
                    : 
                    ''
                }
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
        borderRadius: '4px',
        margin: '40px auto 30px',
        width: '800px',
    },
    repliesItem: {
        backgroundColor: '#fff',
        padding: '10px',
        borderTop: '1px solid #f0f0f0',
    },
    repliesAvatar: {
        width: '30px',
		height: '30px',
        borderRadius: '3px'
    }
}
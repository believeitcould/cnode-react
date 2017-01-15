import React from 'react'
import { render } from 'react-dom'
// import marked from 'marked'
// import '../css/TopicDetail.css'
import { Link } from 'react-router'
import Time from './Time'

const Section = ({ section, children }) => {
    return (
        <div style={styles.section}>
            <SectionHeader>{section}</SectionHeader>
            {children}
        </div>
    )
}

const SectionHeader = ({ children }) => {

    return (
        <div style={{paddingBottom:'10px',borderBottom: '1px solid #f0f0f0'}}>
            <span>
                {children}
            </span>
        </div>
    )
}

const SectionIndex = ({ avatar, loginname, score, createAt }) => {
    return (
        <div>
            <div style={{margin:'10px 0',display:'flex',alignItems:'center'}}>
                <img src={avatar} style={styles.avatar} />
                <span>{loginname}</span>
            </div>
            <div style={{margin:'10px 0'}}>
                <span>
                    {score} 积分
                </span>
            </div>
            <div style={{margin:'10px 0'}}>
                <span>
                    注册时间 {Time(createAt)}
                </span>
            </div>
        </div>
    )
}

const SectionTopic = ({ list }) => {
    return (
        <div>
            {list.map(
                (ele,index) => {
                    return <List item={ele} key={index} />
                })
            }
        </div>
    )
}

const SectionReply = ({ list }) => {
    return (
        <div>
            {list.map(
                (ele,index) => {
                    return <List item={ele} key={index} />
                })
            }
        </div>
    )
}

const List = ({ item }) => {
    console.log(item)
    return (
        <div style={styles.listBox}>
			<img style={styles.listAvatar} src={item.author.avatar_url} />
			<Link style={styles.listTitle} to={`/t/${item.id}`}>{item.title}</Link>
			<span >{Time(item.last_reply_at)}</span>
		</div>
    )
}

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
        this.props.getUserDetail()
    }
    
    render() {
        let data = this.props.details.data
        if (!data) {
            return (<div></div>)
        }

        return (
            <div style={styles.box}>
                <Section section="主页">
                    <SectionIndex avatar={data.avatar_url} 
                                  loginname={data.loginname}
                                  score={data.score}
                                  createAt={data.create_at} />
                </Section>
                <Section section="最近创建的话题">
                    <SectionTopic list={data.recent_topics} />
                </Section>
                <Section section="最近参与的话题">
                    <SectionReply list={data.recent_replies} />
                </Section>
            </div>
            
        )
    }
}

const styles = {
    box: {
        margin: '40px auto 30px',
        width: '800px',
    },
    section: {
        padding: '10px',
        marginBottom: '20px',
        backgroundColor: '#fff',
        borderRadius: '4px'
    },
    avatar: {
        width: '40px',
		height: '40px',
        borderRadius: '3px',
        marginRight: '10px'
    },
    listAvatar: {
        width: '30px',
		height: '30px',
        borderRadius: '3px',
        marginRight: '10px'
    },
    listBox: {
        display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
        padding: '5px 0'
    },
    listTitle: {
		flex: 1
	},
}
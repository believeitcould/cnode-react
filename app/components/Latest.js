import React from 'react';
import { render } from 'react-dom';
import { Button, Menu, Breadcrumb } from 'antd';

export default class Latest extends React.Component {

    componentDidMount() {
        // fetch('http://www.v2ex.com/api/topics/latest.json')
        //     .then(res => res.json())
        //     .then(
        //         data => console.log(data)
        //     );
        fetch('http://baidu.com')
    }

    render() {
        return (
            <div>
				<div className="ant-layout-wrapper">
					<div className="ant-layout-breadcrumb">
						<Breadcrumb>
							<Breadcrumb.Item>首页</Breadcrumb.Item>
							<Breadcrumb.Item>应用列表</Breadcrumb.Item>
							<Breadcrumb.Item>某应用</Breadcrumb.Item>
						</Breadcrumb>
					</div>
					<div className="ant-layout-container">
						<div style={{ height: 210 }}>
						</div>
					</div>
				</div>
            </div>
        )
    }
}
import React from 'react';
import { render } from 'react-dom';
import { Button, Menu, Breadcrumb } from 'antd';

export default class Hottest extends React.Component {

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
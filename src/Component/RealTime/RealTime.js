import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Avatar } from 'antd';
import './RealTime.css'

import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 }
];
const cols = {
  'value': { min: 0 },
  'year': {range: [ 0 , 1] }
};

class RealTime extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo">
            <Avatar src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg"/>
            <span style={{padding: '10px', color: 'white'}} >Demo Game</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="stock" />
              <span>RealTime</span>
            </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="dashboard" />
                    <span>Dashboards</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <Menu.Item key="6">
                <Icon type="search" />
                <span>Explore</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="funnel-plot" />
                <span>Funnels</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="deployment-unit" />
                <span>Cohorts</span>
              </Menu.Item>
              <Menu.Item key="9">
                <Icon type="setting" theme="filled" />
                <span>Config</span>
              </Menu.Item>
              <Menu.Item key="10">
                <Icon type="setting" />
                <span>Setting</span>
              </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, margin: 0 }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item>
                Real Time
              </Menu.Item>
              <Menu.Item>
                Live Feed
              </Menu.Item>
              <Icon type="question-circle" theme="twoTone" style={{fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20 }} />
            </Menu>
          </Header>   
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 60 }}>
              
            </div>
            <div style={{ padding: 24, background: '#fff', minHeight: 60 }}>
              <Chart height={400} data={data} scale={cols} forceFit>
                <Axis name="year" />
                <Axis name="value" />
                <Tooltip
                  crosshairs={{
                    type: "y"
                  }}
                />
                <Geom type="line" position="year*value" size={2} />
                <Geom
                  type="point"
                  position="year*value"
                  size={4}
                  shape={"circle"}
                  style={{
                    stroke: "#fff",
                    lineWidth: 1
                  }}
                />
              </Chart>
            </div><br/>
            <div style={{ padding: 24, background: '#fff', minHeight: 60 }}>
            <Chart height={400} data={data} scale={cols} forceFit>
              <Axis name="year" />
              <Axis name="value" />
              <Tooltip
                crosshairs={{
                  type: "y"
                }}
              />
              <Geom type="line" position="year*value" size={2} />
              <Geom
                type="point"
                position="year*value"
                size={4}
                shape={"circle"}
                style={{
                  stroke: "#fff",
                  lineWidth: 1
                }}
              />
            </Chart>
            </div>
            </Breadcrumb>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default RealTime;
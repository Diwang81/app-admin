import React from 'react';
import { Menu, Icon, Button, Avatar, PageHeader, Input, Collapse, Select } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';


const { SubMenu } = Menu;
const { Search } = Input;
const { Panel } = Collapse;
const { Option } = Select;

function callback(key) {
  console.log(key);
}

const genExtra = () => (
  <Icon
    type="more"
    onClick={event => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);

class Home extends React.Component {
  state = {
    expandIconPosition: 'left',
    panels : []
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  handleClick = e => {
    const nextId = this.state.panels.length + 1
    this.setState({
          panels: this.state.panels.concat([nextId])
    });
  };

  logoutHandler =(e) => {
    this.props.history.push('/login')
};

  render() {
    const { expandIconPosition } = this.state;
    return (
      <React.Fragment>
        <div>
          <Menu className="Menu" selectedKeys={[this.state.current]} mode="horizontal">
            <Avatar src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-joystick-game-graphic-design-element-vector-illustration-png-image_3698982.jpg" style={{margin: "10px"}} />
            <Button type="link" style={{marginLeft: "150px", color: 'white' }} ><Link to="/Home">< h3 style={{ color: 'white' }}>Overview</h3></Link></Button>
            <SubMenu
              style={{ position: "absolute", right: "0px"}}
              title={
              <span className="submenu-title-wrapper">
                <Icon type="user" />
              </span>
            }
          >
            <Menu.ItemGroup>
              <Menu.Item key="setting:1"><Icon type="profile" />Account<Link to="/ManageAccount" /></Menu.Item>
              <Menu.Item key="setting:2"><Icon type="exclamation-circle" theme="filled" />Developers <Link to="/ManageDev" /></Menu.Item>
              <Menu.Item key="setting:3"><Icon type="file-done" />Applications<Link to="/ManageApp" /></Menu.Item>
              <Menu.Item key="setting:4"><Icon type="setting" />Members<Link to="/Member" /></Menu.Item>
              <Menu.Item key="setting:5" onClick={e=>this.logoutHandler(e)}><Icon type="logout" />Logout</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
      <div className="Header">
        <div className="PageHeader">
          <PageHeader  title="Games"
            style ={{width: 710, paddingLeft: 0, paddingRight: 0 ,float: 'left'}}/>
          <Search placeholder="Search App or Developer" onSearch={value => console.log(value)} style ={{width: 330, paddingTop: 24, paddingBottom: 24 ,float: 'right'}} enterButton />
          <Button type='link' style ={{float: 'right'}}>< h4><Icon type="plus-circle" theme="twoTone" /> Member</h4></Button>          
          <Button type='link' style ={{float: 'right'}}>< h4><Icon type="plus-circle" theme="twoTone" /> Developer</h4></Button>          
          <Button onClick={this.handleClick.bind(this)} type='link' style ={{float: 'right'}}>< h4><Icon type="plus-circle" theme="twoTone" /> App</h4></Button>
        </div>
      </div>
      <div>
          <Collapse defaultActiveKey={['1','2']} onChange={callback} expandIconPosition={expandIconPosition} style ={{width: '70%', margin: 'auto', marginTop: '10px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}} >       
            <Panel header="Loonix" key="1" extra={genExtra()} > 
            <Avatar shape="square" size={64} icon="user" />
            <Button type="link" ><Link to="/Home">< h3 style={{ color: 'black' }}>Game Name</h3></Link></Button>
            <Icon type="more" style={{ float: 'right', marginTop: '25px'}} />
            <Icon type="loading" style={{ fontSize: '30px', float: 'right', margin: '20px', paddingLeft: '10px'}} />
            <Icon type="loading" style={{ fontSize: '30px', float: 'right', margin: '20px', paddingLeft: '10px'}} />
            <Icon type="loading" style={{ fontSize: '30px', float: 'right', margin: '20px', paddingLeft: '10px'}} />
            </Panel>
          </Collapse><br/>
      </div>
      <div >
        <Collapse defaultActiveKey={['1']} onChange={callback} expandIconPosition={expandIconPosition} style ={{width: '70%', margin: 'auto', marginTop: '30px', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'}}>
           <Panel header="GameTester" key="1" extra={genExtra()}>
            <Avatar shape="square" size={64} icon="user" />
            <Button type="link" ><Link to="/Home">< h3 style={{ color: 'black' }}>Game Name</h3></Link></Button>
            {
              this.state.panels.map((panelId) => (
                <Panel key={panelId} id={panelId} />)
            )}
           </Panel>
        </Collapse>
        <Select value={expandIconPosition} onChange={this.onPositionChange} style ={{float: 'right', marginRight: '50%', marginTop: '20px'}} >
              <Option value="left">left</Option>
              <Option value="right">right</Option>
            </Select>
      </div>
      </React.Fragment>
    );
  }
}

export default Home;
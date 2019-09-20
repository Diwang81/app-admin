import React from 'react';
import { Form, Input, Button, Card, Menu, Icon, Avatar, PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';

const { SubMenu } = Menu;

class ManageDev extends React.Component {
    state = {
      confirmDirty: true,
      autoCompleteResult: [],
      expandIconPosition: 'left',
    };
    
      onPositionChange = expandIconPosition => {
        this.setState({ expandIconPosition });
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };

    logoutHandler =(e) => {
      this.props.history.push('/login')
    };
  
    render() {

      return (
        <React.Fragment>
            <div>
                <Menu className="Menu" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
                <PageHeader  title="Manage Application"
                    style ={{width: 710, paddingLeft: 200, paddingRight: 0 ,float: 'left'}}/>
            <div className='continerAccount'>
                <Card bordered={false} style={{ textAlign: 'center', width: 600, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="Name Application">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Name Game">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Save
                        </Button>
                    </Form.Item>
                    </Form>
                </Card>
            </div>
        </React.Fragment>    
      );
    }
  }
  
  export default Form.create()(ManageDev);
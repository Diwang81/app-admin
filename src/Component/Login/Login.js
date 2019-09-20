import React from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Card, Avatar } from 'antd';
import './Login.css';


class NormalLoginForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        submitted: false
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
        this.props.login(username, password);
    }
  };

  
  render() {
    const { username, password, submitted } = this.state;
    const { getFieldDecorator } = this.props.form;
  
    return (
      
    <div className='continer' >
      <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg" 
        style={{margin: '30px', marginLeft: '170px', textAlign: 'center'}} />
      <Card bordered={false} style={{ textAlign: 'center', width: 400, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item style={{ textAlign: 'center'}} className={'form-group' + (submitted && !username ? ' has-error' : '')}><h1>Login</h1></Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                value={this.state.email}
                onChange={this.handleChange}
              />)}

          </Form.Item>
          <Form.Item className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in</Button>
            <Form.Item>
              <Button type="link" ><Link to="/Forgot"> Forgot your password <Icon type="question"/></Link></Button>
            </Form.Item>
            You don't have an account? <Link to="/Register"> <Icon type="user"/> SIGN UP for FREE</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(NormalLoginForm);

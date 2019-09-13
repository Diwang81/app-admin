import React from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Checkbox, Card, Modal, Avatar } from 'antd';
import GoogleLogin from 'react-google-login';
import './Login.css';


class NormalLoginForm extends React.Component{

  state = {
    visible: false,
    confirmLoading: false,
  };

  
  showModal = () => {
    this.setState({
      visible: true,
      
    });
  };
  
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };
  
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    const { getFieldDecorator } = this.props.form;
    const responseGoogle = (response) => {
      console.log(response);
    }
    return (
    <div className='continer' >
      <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg" 
        style={{margin: '30px', marginLeft: '170px', textAlign: 'center'}} />
      <Card bordered={false} style={{ textAlign: 'center', width: 400, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item style={{ textAlign: 'center'}}><h1>Login</h1></Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <GoogleLogin
              clientId="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg"
              render={renderProps => (
                <Button className="button-github" onClick={renderProps.onClick} disabled={renderProps.disabled}> <Icon type="google" /> Google </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <Button className="button-github"> <Icon type="github" /> Github
            </Button>
            <Form.Item>
              <Button type="link" onClick={this.showModal}> Forgot your password <Icon type="question"/>
              </Button>
              <Modal
                title="Forgot Your Password"
                contentLabel="onRequestClose Example"
                visible={visible}
                onOk={this.handleOk}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}              
              >
              <p>It happens to all of us, don't sweat it! We'll send you a reset password email, so you can create a new one. Fill in the email you use to login.</p>
              <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              </Modal>
            </Form.Item>
            You don't have an account? <Link to="/Register"> <Icon type="user"/> SIGN UP for FREE</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create( {name: 'normal_login'} )(NormalLoginForm);
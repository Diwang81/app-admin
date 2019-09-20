import React from 'react';
import { Form, Icon, Input, Card, Avatar, Row, Col, Button,} from 'antd';
import { Link } from 'react-router-dom';

class Forgot extends React.Component{
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

  showModal = () => {
    this.setState({
      visible: true,
      
    });
  };
 
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

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
  
    return (
    <div className='continer' >
      <Avatar size={64} src="https://t4.ftcdn.net/jpg/02/37/83/65/500_F_237836548_QZ5lcLl0Le4fhjal2MlgOPK3dyDMBbfR.jpg" 
        style={{margin: '30px', marginLeft: '170px'}} />
      <Card bordered={false} style={{  width: 400, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item style={{ textAlign: 'center'}} className={'form-group' + (submitted && !username ? ' has-error' : '')}><h1>Forget Password</h1></Form.Item>
          <Form.Item>
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                value={this.state.email}
                onChange={this.handleChange}
              />
          </Form.Item>
          <Form.Item style={{ textAlign: 'right'}} className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button type="link" ><Link to="/Login"> Back to Login </Link></Button>
          </Form.Item>
          <Form.Item>
            <Row gutter={8} >
              <Col span={15} >
                <Input />
              </Col>
              <Col span={8}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item style={{ textAlign: 'center'}}>
            <Button type="primary"  >
                Send Email
            </Button>
          </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Forgot;

import React from 'react';
import { Menu, Icon, Button, Avatar, PageHeader, Card, Table} from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';


const { SubMenu } = Menu;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
  }

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
        <PageHeader  title="Member"
            style ={{width: 710, paddingLeft: 0, paddingRight: 0 ,float: 'left'}}/>
        <div className="PageHeader">
            <Card bordered={false} style={{textAlign: 'center', width: 800, marginLeft: 90, boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>
                <Table columns={columns} dataSource={data} onChange={onChange} />
        </Card>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Home;
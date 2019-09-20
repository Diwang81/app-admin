import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Home from './Component/Home/Home';
import RealTime from './Component/RealTime/RealTime';
import Forgot from './Component/Forgot/Forgot';
import ManageAccount from './Component/Home/ManageAccount'
import ManageDev from './Component/Home/ManageDev'
import Reset from './Component/Reset/Reset';
import ManageApp from './Component/Home/ManageApp';
import Member from './Component/Home/Member';


class App extends Component {
  render() {
    return (
      <div>
         {alert.message &&
              <div className={`alert ${alert.type}`}>{alert.message}</div>
          }
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Login" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Forgot" component={Forgot}></Route>
          <Route path="/Realtime" component={RealTime}></Route>
          <Route path="/ManageAccount" component={ManageAccount}></Route>
          <Route path="/ManageDev" component={ManageDev}></Route>
          <Route path="/ManageApp" component={ManageApp}></Route>
          <Route path="/Reset" component={Reset}></Route>
          <Route path="/Member" component={Member}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
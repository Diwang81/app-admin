import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Home from './Component/Home/Home';
import RealTime from './Component/RealTime/RealTime';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Home" component={Home}></Route>
          <Route path="/Realtime" component={RealTime}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
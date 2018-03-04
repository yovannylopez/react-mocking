import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

class AppRoutes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    );
  }
}

export default AppRoutes;

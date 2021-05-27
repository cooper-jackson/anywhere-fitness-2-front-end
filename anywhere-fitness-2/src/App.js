import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
import ClassForm from './components/ClassForm';

import Homepage from './components/Homepage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PrivateRoute from './components/PrivateRoute'
import EditForm from './components/EditForm'

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/Home' component={Homepage} />
          <PrivateRoute path='/AddClass' component={ClassForm} />
          <PrivateRoute path='/Edit/:class_id' component={EditForm} />
          <Route exact path='/' component={LoginForm} />
          <Route path='/Register' component={SignUpForm} />
          {/* <Route path='/Home' component={Homepage} />
          <Route path='/AddClass' component={ClassForm} /> */}
          {/* <Route path='/EditClass' component={EditClass} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null)(App)

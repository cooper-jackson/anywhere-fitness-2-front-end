import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import ClassForm from "./components/ClassForm";

import Homepage from "./components/Homepage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import PrivateRoute from "./components/PrivateRoute";
import EditForm from "./components/EditForm";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/home" component={Homepage} />
          <PrivateRoute path="/addclass" component={ClassForm} />
          <PrivateRoute path="/edit/:class_id" component={EditForm} />
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={SignUpForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null)(App);

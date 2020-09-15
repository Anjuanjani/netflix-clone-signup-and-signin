import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import ForgotPassword from './pages/ForgotPassword';
import SignUpForm_Student from './pages/SignUpForm_Student';




import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="Right_Side">
          
            <Route path="/sign-up" component={SignUpForm}/>
            <Route path="/" exact component={SignInForm}/>
            <Route path="/forgot_password" component={ForgotPassword} />
            
            <Route path = "/sign-up-student" component = {SignUpForm_Student}/>
            
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
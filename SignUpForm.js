import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import SignUpForm_Student from './SignUpForm_Student';



class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false,
            cmplt: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {

        alert('The form was submitted with the following data:');
        console.log((this.state.password).length);

    }
    

    render() {
        return (
          <Router>
          <div>

            <div className="FormTitle">
                <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or 
                <NavLink to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div><br></br>
           <br></br>
           <br></br>
           <br></br>

        <div className="FormField">
         
            
            <div className = "Category__Box">
              <div className="Category__Text">
            <p>Do you want us to entertain you!!!</p>
            <p>Then create your account.</p>
            </div>
              <Link to="/sign-up-student" className="Category__Button">Sign Up</Link>
            </div>
            
            
        </div>
        
        <Route path="/sign-up-student"  component={SignUpForm_Student}/>
       


      </div>
      </Router>



        );
    }
}

export default SignUpForm;

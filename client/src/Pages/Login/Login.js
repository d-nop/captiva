
import React from "react";
import { Grid, Row, Col,  } from "react-bootstrap";
import axios from "axios";

import PawLogo from "../../utils/assets/images/PawLogo.png";
import Background from "../../utils/assets/images/streetPhoto.png";
import "./Login.css";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import {
  Navbar,
  Form,
  FormGroup,
  FormControl,
  Button,
  ControlLabel

} from "react-bootstrap";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    submitId:"loginButton",
    formId:"loginForm",
    nameholder:"Your username",
    passholder:"Your Password",
    buttonVal: "Log In",
    redirect:false
  }

  handleSignup=event=>{
        if(this.state.submitId==="loginButton"){
            this.setState({
                nameholder:"Create a username",
                passholder:"Create a password",
                submitId:"signupButton",
                buttonVal: "Sign Up",
                formId:"signupForm",
        })
         }
            
        else{
      this.setState({
            submitId:"loginButton",
            nameholder:"Your username",
            passholder:"Your Password",
            buttonVal: "Log In",
            formId:"loginForm",
        })
    }
    
   }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log(event.target.id);

    switch(event.target.id){

      case "loginForm":
        const loginCreds = {
          username: this.state.username,
          password:this.state.password
        };
        console.log(loginCreds);
        axios.post ("/login", loginCreds)
          .then(res => {
            console.log(res);
            if(res.status===200){
            const newObj ={username: res.data.username,
                    token: res.data.token};
            localStorage.setItem("user", JSON.stringify(newObj));
            this.props.history.push("/capture");
        	}
        	else if (res.status===208){
        		alert("User already exists...please log in");
        	}         
          })
          .catch(err=>console.log(err))
        this.setState({
              username: "",
              password: ""
            })
      break
      case "signupForm":
        const signupCreds = {
          username: this.state.username,
          password:this.state.password
        };
        console.log(signupCreds);
        axios.post ("/register",signupCreds)
          .then(res => {
              console.log(res);
              if(res.status===200){
              localStorage.setItem("username", res.username);
              localStorage.setItem("token", res.token); 
              this.props.history.push("/capture"); 
              }
              else if (res.status===401){
        		alert("Wrong password");
        	}            
          })
          .catch(err=>console.log(err))
        this.setState({
              username: "",
              password: ""
            })
        break
    }
  
  }


  render () {
   
	     
    return (
		
       <div className="LoginPage">
        <div>
          <Grid>
            <Row>
              <Col xs={12}>
                <Form
                  inline
                  onSubmit={this.handleSubmit}
                  id={this.state.formId}
                >
                  <FormGroup controlId="formInlineName">
                    {" "}
                    <FormControl
                      type="text"
                      name="username"
                      value={this.state.username}
                      placeholder={this.state.nameholder}
                      onChange={this.handleChange}
                    />
                  </FormGroup>{" "}
                  <FormGroup controlId="formInlinePassword">
                    {" "}
                    <FormControl
                      type="password"
                      name="password"
                      value={this.state.value}
                      placeholder={this.state.passholder}
                      onChange={this.handleChange}
                    />
                  </FormGroup>{" "}
                  <Button
                    type="submit"
                    id={this.state.submitId}
                  >
                    {this.state.buttonVal}
                  </Button>
                  <a
                    id="toggleButton"
                    onClick={this.handleSignup}
                  >
                    {" "}
                    Log In/Sign Up{" "}
                  </a>
                </Form>
                <img src = {PawLogo} alt="logo" id="logo"/>
                <Row center="xs">
                          <h1 id="BrandName">Captiva</h1>
                    </Row>
              </Col>
            </Row>
          </Grid>

        </div>
      </div>
    );
  }

}
export default Login;


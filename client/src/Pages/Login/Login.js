import React from "react";
import { Grid, Row, Col,  } from "react-bootstrap";
import $ from "jquery";
import Logo from "../../components/Logo";
import logo from "../../utils/assets/images/streetPhoto.png";

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
		buttonVal: "Log In"
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
				console.log( this.state.username,  this.state.password);
				const loginCreds = {
					username: this.state.username,
					password:this.state.password
				};
				console.log(loginCreds);
				$.post ("/login", loginCreds, (req, res) => {
					console.log(res);
					const date = new Date('01 Jan 2020 00:00:00 PDT');
					const endDate = date.toUTCString();
					document.cookie="authToken"+res.authToken+";expires="+endDate;					
				})
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
				$.post ("/register",signupCreds, (req, res) => {
					console.log(res);
					const date = new Date('01 Jan 2020 00:00:00 PDT');
					const endDate = date.toUTCString();
					document.cookie="authToken"+res.authToken+";expires="+endDate;				
				})
				this.setState({
					    username: "",
					    password: ""
				    })
				break
		}
	
	}

	render () {
		return (
			<div class="homePage">
			<Grid>
			<Row>
			<Col xs={12}>

				<Form inline onSubmit = {this.handleSubmit} id={this.state.formId}>
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
					<Button type="submit" id={this.state.submitId} >{this.state.buttonVal}
					</Button>
					<a  id= "toggleButton" onClick={this.handleSignup}>  Log In/Sign Up </a>
				</Form>
				<Logo/>
				</Col>
				</Row>
				</Grid>
				</div>
		);
	}
}

export default Login;

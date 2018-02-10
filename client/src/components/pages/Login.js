import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import $ from "jquery";

import {Navbar,Form,FormGroup,FormControl,Button,ControlLabel} from "react-bootstrap";

class Login extends React.Component {
	state = {
				loginUsername: "",
			    loginPassword: "",
			    signupUsername: "",
			    signupPassword: ""
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log({[name]: value });
	};

	handleSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
		console.log(event.target);
		

		switch(event.target.id){
			case "loginForm":
				console.log( this.state.loginUsername,  this.state.loginPassword);
				const loginCreds = {
					username: this.state.loginUsername,
					password:this.state.loginPassword,
				};
				console.log(loginCreds);
				$.post ("/login", loginCreds, (req, res) => {
					console.log(req, res);
					
				});
				this.setState({
					    loginUsername: "",
					    loginPassword: "",
					    signupUsername: "",
					    signupPassword: ""
				    });
			break
			case "signupForm":
				console.log(this);
				const signupCreds = {
					username: this.state.signupUsername,
					password:this.state.signupPassword
				};
				console.log(signupCreds);
				$.post ("/register",signupCreds, (req, res) => {
					console.log(req, res);
					
				});
				this.setState({
					    loginUsername: "",
					    loginPassword: "",
					    signupUsername: "",
					    signupPassword: ""
				    });
				break
		}
	
	};

	render () {
		return (
			<div>
			<Grid>
			<Row>
			<Col xs={6}>
				<Form inline onSubmit = {this.handleSubmit} id="loginForm">
					<FormGroup controlId="loginFormUser">
						<ControlLabel>
							<h4>Your Username</h4>
						</ControlLabel>{" "}
						<FormControl
							type="text"
							name="loginUsername"
							value={this.state.loginUsername}
							placeholder="username"
							onChange={this.handleChange}
						/>
					</FormGroup>{" "}
					<FormGroup controlId="loginFormPassword">
						<ControlLabel>
							<h4>Password</h4>
						</ControlLabel>{" "}
						<FormControl
							type="password"
							name="loginPassword"
							value={this.state.loginPassword}
							placeholder="password"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button type="submit" id="loginButton">
						Log In
					</Button>
				</Form>
			</Col>
			<Col xs={6}>
				<Form inline onSubmit = {this.handleSubmit} id="signupForm">
					<FormGroup controlId="signupFormUser">
						<ControlLabel>
							<h4>Create a Username</h4>
						</ControlLabel>{" "}
						<FormControl
							type="text"
							name="signupUsername"
							value={this.state.signupUsername}
							placeholder="username"
							onChange={this.handleChange}
						/>
					</FormGroup>{" "}
					<FormGroup controlId="signupFormPassword">
						<ControlLabel>
							<h4>Create a Password</h4>
						</ControlLabel>{" "}
						<FormControl
							type="password"
							name="signupPassword"
							value={this.state.signupPassword}
							placeholder="password"
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button type="submit" id="signupButton">
						Sign Up
					</Button>
				</Form>
			</Col>
			</Row>
			</Grid>
			</div>
		)
	}
}

export default Login;

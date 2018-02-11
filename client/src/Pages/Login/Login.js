import React from "react";
import { Col } from "react-bootstrap";
import $ from "jquery";

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
		nameholder:"Your username",
		passholder:"Your Password"
	};

	handleSignup=event=>{
		if(this.state.submitId==="loginButton"){
			this.setState({
				nameholder:"Pick a username",
				placeholder:"Pick a password",
				submitId:"signupButton"
			});
		};
		else{
			submitId:"loginButton",
			nameholder:"Your username",
			passholder:"Your Password"
		};
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};


	handleSubmit = event => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
		const loginCreds = {
			username: this.state.username,
			password:this.state.password
		}

		// Alert the user if their login is successful and clear the form input
		$.post ("/login",loginCreds, (req, res) => {
			console.log(req, res);

		});
	};

	render () {
		return (
			<Col xs={12}>
				<Form inline onSubmit = {this.handleSubmit}>
					<FormGroup controlId="formInlineName">
						<ControlLabel>
							<h4>User Name</h4>
						</ControlLabel>{" "}
						<FormControl
							type="text"
							name="username"
							value={this.state.username}
							placeholder={this.state.nameholder}
							onChange={this.handleChange}
						/>
					</FormGroup>{" "}
					<FormGroup controlId="formInlinePassword">
						<ControlLabel>
							<h4>Password</h4>
						</ControlLabel>{" "}
						<FormControl
							type="password"
							name="password"
							value={this.state.value}
							placeholder={this.state.passholder}
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button type="submit" id={this.state.submitId}>
						Sign Up
					</Button>
				</Form>
			</Col>
		);
	}
}

export default Login;

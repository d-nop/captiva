import React from "react";
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
		password: ""
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
			<Form inline onSubmit = {this.handleSubmit}>
				<FormGroup controlId="formInlineName">
					<ControlLabel>
						<h4>User Name</h4>
					</ControlLabel>{" "}
					<FormControl
						type="text"
						name="username"
						value={this.state.username}
						placeholder="username"
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
						placeholder="password"
						onChange={this.handleChange}
					/>
				</FormGroup>
				<Button type="submit" id="submitButton">
					Sign Up
				</Button>
			</Form>
		);
	}
}

export default Login;

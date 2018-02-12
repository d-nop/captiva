import React from "react";
import { Grid, Row, Col,  } from "react-bootstrap";
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
		passholder:"Your Password",
		buttonVal: "Log In"
	}

	handleSignup=event=>{
        if(this.state.submitId==="loginButton"){
            this.setState({
                nameholder:"Create a username",
                passholder:"Create a password",
                submitId:"signupButton",
                buttonVal: "Sign Up"
            
        })

         }
            
        else{
			this.setState({
            submitId:"loginButton",
            nameholder:"Your username",
            passholder:"Your Password",
            buttonVal: "Log In"
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
			<div>
			<Grid>
			<Row>
			<Col xs={12}>

				<Form inline onSubmit = {this.handleSubmit} id="loginForm">
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
				
				</Col>
				</Row>
				</Grid>
				</div>
		);
	}
}

export default Login;

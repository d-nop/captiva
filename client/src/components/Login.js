import React from "react";
import {Navbar} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {FormGroup} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Login = props => {
	const getValues = event => {
		event.preventDefault();

		const name = event.target.name;
		const value = event.target.value;
		this.setState({ [name]: value });
		console.log("Value: ", event.target.value);
	};

	const onSubmit = event => {
		event.preventDefault();
		console.log("works fine");
	};


	return (
		<div className="App">
			<div className="panel, panel default">
				<div className="d-flex justify-content-center">
					<h3>Login</h3>
				</div>
			</div>

			<div className="d-flex justify-content-center">
				<form method="/login" method="POST">
					<div className="form-group">
						<label
							htmlFor="exampleInputName1"
							onChange={props.getValue}
						>
							<h5>User Name</h5>
						</label>
						<input
							type="name"
							className="form-control"
							name="userName"
							id="exampleInputName"
							placeholder="Enter User Name"
						/>
					</div>

					<div className="form-group">
						<label
							htmlFor="exampleInputPassword1"
							onChange={props.getValue}
						>
							<h5>Password</h5>
						</label>
						<input
							type="password"
							className="form-control"
							name="password"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>

					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							name="remeber"
							id="exampleCheck1"
							onChange={props.getValue}
						/>
						<label
							className="form-check-label"
							htmlFor="exampleCheck1"
							onChange={props.getValue}
						>
							<h5>Remember Me</h5>
						</label>
					</div>

					<button
						className="submitButton"
						type="submit"
						className="btn btn-primary"
						onClick={props.onSubmit}
					>
						<h5>Submit</h5>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;

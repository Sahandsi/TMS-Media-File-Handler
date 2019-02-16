import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      userdata: null,
      success: false
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  submitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/register", this.state)
      .then(result => {
        if (result.data.errors) {
          return this.setState(result.data);
        }
        return this.setState({
          userdata: result.data,
          errors: null,
          success: true
        });
      });
  }
  render() {
    return (

      <MDBContainer>
              <p class="h3 mb-4">Register</p>
      <MDBRow>
      <MDBCol md="6">
      <div >
        {this.state.success && <p>You are successfully registerated!</p>}
        <form onSubmit={this.submitHandler}>
        <MDBInput
            type="text"
            label="Username"
            icon="fas fa-id-badge"
            
            onChange={this.changeHandler}
            name="username"
            id="username"
          />{" "}
          {this.state.errors &&
            this.state.errors.username && (
              <p>{this.state.errors.username.msg}</p>
            )}
          <br />
          <MDBInput
            type="email"
            icon="envelope"
            label="Email"
            name="email"
            onChange={this.changeHandler}
            id="emailreg"
          />
          {this.state.errors &&
            this.state.errors.email && <p>{this.state.errors.email.msg}</p>}
          <br />
          <MDBInput
            type="text"
            onChange={this.changeHandler}
            icon="fas fa-user-circle"
            label="First Name"
            name="firstname"
            id="firstname"
          />
          {this.state.errors &&
            this.state.errors.firstname && (
              <p>{this.state.errors.firstname.msg}</p>
            )}
          <br />
          <MDBInput
            type="text"
            onChange={this.changeHandler}
            icon="fas fa-user-circle"
            label="Last Name"
            name="lastname"
            id="lastname"
          />
          {this.state.errors &&
            this.state.errors.lastname && (
              <p>{this.state.errors.lastname.msg}</p>
            )}
          <br />
          <MDBInput
            type="password"
            onChange={this.changeHandler}
            icon="lock"
            label="Password"
            name="password"
            id="passwordreg"
          />
          {this.state.errors &&
            this.state.errors.password && (
              <p>{this.state.errors.password.msg}</p>
            )}
          <br />
          <button class="btn btn-info btn-block my-4" type="Submit">Submit</button>
        </form>
      </div>
      </MDBCol>
       </MDBRow>
    </MDBContainer>
    );
  }
}

export default Register;

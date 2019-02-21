import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput} from 'mdbreact';

axios.defaults.withCredentials = true;
class UserLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
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
      .post("http://localhost:4000/api/login", this.state)
      .then(res => {
        if (res.data.error) {
          return this.setState({ error: res.data.message });
        }
        if (res.data.errors) {
          return this.setState({ valerrors: res.data.errors });
        }
        return (window.location = "/filelist");
      });
  }
  render() {
    return (
      <MDBContainer>
       <p className="h3 mb-4">Login</p>
         <MDBRow>
         <MDBCol md="6">
      <div >
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.submitHandler}>
          {this.state.valerrors &&
            this.state.valerrors.email && (
              <p>{this.state.valerrors.email.msg}</p>
            )}
           <MDBInput
            onChange={this.changeHandler}
            label="Registered Email"
            icon="envelope"
            type="email"
            name="email"
            id="email"
          />{" "}
          <br />
          {this.state.valerrors &&
            this.state.valerrors.password && (
              <p>{this.state.valerrors.password.msg}</p>
            )}
          <MDBInput
            onChange={this.changeHandler}
            icon="lock"
            label="Password"
            type="password"
            name="password"
            id="password"
          />{" "}
          <br />
          <button  className="btn btn-info btn-block my-4" type="submit">Submit</button>
        </form>
        <br />





      </div>
         </MDBCol>
       </MDBRow>
    </MDBContainer>
    );
  }
}

export default UserLoginComponent;
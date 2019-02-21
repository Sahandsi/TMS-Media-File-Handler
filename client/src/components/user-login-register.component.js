import React, { Component } from "react";
import UserLoginComponent from "./user-login.component";
import UserRegisterComponent from "./user-register.component";
class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <UserLoginComponent />
        <UserRegisterComponent />
      </div>
    );
  }
}

export default Home;

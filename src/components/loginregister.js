import React, { Component } from "react";
import Login from "./Login";
import Register from "./Register";
class Home extends Component {
  render() {
    return (
      <div class="d-flex justify-content-center">
        <Login />
        <Register />
      </div>
    );
  }
}

export default Home;

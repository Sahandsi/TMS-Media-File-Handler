
import logo from "./logo.png";
import axios from "axios";

import CreateFile from "./components/file-upload.component";
import EditFile from "./components/file-edit.component";
import DeleteFile from "./components/file-delete.component";
import FilesList from "./components/files-list.component";
import pastFile from "./components/file-PastVersion.component";
import LoginRegister from "./components/user-login-register.component";


import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

class App extends Component {

  state = {
    isOpen: false
  };


  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }


  render() {
    return (
      <Router>
        <div>
          <MDBNavbar color="indigo" dark expand="md">

            <MDBNavbarBrand>
              <a className="navbar-brand" href="/" >
                <img src={logo} width="50" height="50" alt="/" /></a>
            </MDBNavbarBrand>

            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

              <MDBNavbarNav left>

                <MDBNavItem >
                  <MDBNavLink to="/filelist">Meta Files</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/create">Upload File</MDBNavLink>
                </MDBNavItem>


              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <button className="btn btn-info btn-block my-8" onClick={() => axios
                    .get("http://localhost:4000/api/logout")
                    .then(res => (window.location = "/"))}>Logout</button>
                </MDBNavItem>

              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>

          <Route exact path="/" component={LoginRegister} />
          <Route path="/filelist" exact component={FilesList} />
          <Route path="/edit/:id" component={EditFile} />
          <Route path="/delete/:id" component={DeleteFile} />
          <Route path="/pastVersions/:id" component={pastFile} />
          <Route path="/create" component={CreateFile} />



        </div>
      </Router>
    );
  }
}

export default App;
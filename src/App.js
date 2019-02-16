// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";


// import React from 'react';
// import { MDBNavbar, MDBNavbarBrand,
// MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from 'mdbreact';



// import CreateFile from "./components/create-todo.component";
// import EditTodo from "./components/edit-todo.component";
// import TodosList from "./components/todos-list.component";
// import LoginRegister from "./components/loginregister";
// import Main from "./components/Mainpage";



// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="container">

//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="/" target="_blank">
//               <img src={logo} width="30" height="30" alt="/" />
//             </a>
//             <div className="collpase nav-collapse">
//               <ul className="navbar-nav mr-auto">
//                 <li className="navbar-item">
//                   <Link to="/todolist" className="nav-link">Todos</Link>
//                 </li>
//                 <li className="navbar-item">
//                   <Link to="/create" className="nav-link">Create Todo</Link>
//                 </li>
//                 <li className="navbar-item">
//                   <Link to="/" className="nav-link">Login/Register</Link>
//                 </li>
//                 <li className="navbar-item">
//                   <Link to="/mainpage" className="nav-link">Main Page</Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>

//           <Route exact path="/" component={LoginRegister} />
//           <Route path="/todolist" exact component={TodosList} />
//           <Route path="/edit/:id" component={EditTodo} />
//           <Route path="/create" component={CreateFile} />
//           <Route exact path="/mainpage" component={Main} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;



// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.png";
import axios from "axios";

import CreateFile from "./components/upload-file.component";
import EditTodo from "./components/file-edit.component";
import TodosList from "./components/files-list.component";
import LoginRegister from "./components/loginregister";
import Main from "./components/Mainpage";


import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBBtn
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
                  <MDBNavLink to="/">Login/Register</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem >
                  <MDBNavLink to="/todolist">Meta Files</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/create">Upload File</MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBNavLink to="/mainpage">Main Page</MDBNavLink>
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
          <Route path="/todolist" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateFile} />
          <Route exact path="/mainpage" component={Main} />

        </div>
      </Router>
    );
  }
}

export default App;
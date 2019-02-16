import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';


axios.defaults.withCredentials = true;
class Login extends Component {
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
        return (window.location = "/mainpage");
      });
  }
  render() {
    return (
      <MDBContainer>
       <p class="h3 mb-4">Login</p>
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
            label="Registred Email"
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
          <button  class="btn btn-info btn-block my-4" type="submit">Submit</button>
        </form>
        <br />
      </div>
         </MDBCol>
       </MDBRow>
    </MDBContainer>
    );
  }
}

export default Login;





// import React, { Component } from "react";
// import axios from "axios";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

// axios.defaults.withCredentials = true;
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       password: "",
//       email: "",
//       error: null,
//       valerrors: null
//     };
//     this.changeHandler = this.changeHandler.bind(this);
//     this.submitHandler = this.submitHandler.bind(this);
//   }

//   changeHandler(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
//   submitHandler(e) {
//     e.preventDefault();
//     axios
//       .post("http://localhost:4000/api/login", this.state)
//       .then(res => {
//         if (res.data.error) {
//           return this.setState({ error: res.data.message });
//         }
//         if (res.data.errors) {
//           return this.setState({ valerrors: res.data.errors });
//         }
//         return (window.location = "/mainpage");
//       });
//   }

//   render() {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h5 text-center mb-4">Sign in</p>
//             <div className="grey-text">



//             {this.state.error && <p>{this.state.error}</p>}
//         <form onSubmit={this.submitHandler}>
//          {this.state.valerrors &&
//             this.state.valerrors.email && (
//               <p>{this.state.valerrors.email.msg}</p>
//             )}




//               <MDBInput
//                 onChange={this.changeHandler}
//                 label="Type your email"
//                 icon="envelope"
//                 group
//                 type="email"
//                 validate
//                 error="wrong"
//                 success="right"
//                 //           {this.state.valerrors &&
// //             this.state.valerrors.password && (
// //               <p>{this.state.valerrors.password.msg}</p>
// //             )}
//               />
//               <MDBInput
//                 label="Type your password"
//                 icon="lock"
//                 group
//                 type="password"
//                 validate
//               />
//             </div>
//             <div className="text-center">
//               <MDBBtn>Login</MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//     );
//   }
// }
// export default Login;
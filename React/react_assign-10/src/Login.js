import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import Child from "./Child";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      token: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({
          token: response.data.token,
        });
      })
      .catch((error) => {
        window.alert("Invalid Username and Password")
     });
      
  };

  render() {
    console.log(this.state);
    if (this.state.token) {
      return <Child />;
    }

    return (
      <div className="container">
        <img src="./avatar.jpg" alt="" />
        <h1>Login</h1>
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          name="email"
          onChange={this.handleChange}
          required
        />
        <p></p>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          required
        />
        <p></p>
        <button className="loginbtn" onClick={this.handleLogin}>
          Sign In
        </button>
      </div>
    );
  }
}
export default Login;

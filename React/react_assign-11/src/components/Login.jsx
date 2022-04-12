import React, { Component } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import Dashboard from "./Dashboard";
import "./Login.css";
import axios from "axios";
import Navbar from "./Navbar";

export default class Login extends Component {
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
    const { toggleAuth, setResponseData } = this.context;
    axios
      .post("https://reqres.in/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        this.setState({
          responseData: response.data.token,
          isAuth: toggleAuth(),
        });
        setResponseData(this.state.responseData);
      })
      .catch((error) => {
        window.alert("Invalid Username and Password");
      });
  };
  render() {
    // console.log(this.state);
    // console.log(this.context);
    if (this.context.responseData) {
      return <Dashboard />;
    }

    return (
      <div>
        <Navbar />
        <div className="login-container">
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
        </div>
      </div>
    );
  }
}
Login.contextType = AuthContext;

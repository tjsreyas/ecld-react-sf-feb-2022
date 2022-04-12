import React, { Component } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import "./Login.css";

export default class Navbar extends Component {
  render() {
    const { isAuth, toggleAuth } = this.context;
    console.log(isAuth);

    return (
      <div>
        <div className="navbar">
          <button onClick={toggleAuth}>
            <i className="fa fa-fw fa-user"></i> {isAuth ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    );
  }
}
Navbar.contextType = AuthContext;

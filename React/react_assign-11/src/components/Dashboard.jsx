import React, { Component } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.context.isAuth ? (
          <div className={this.context.button ? "buttonTrue" : "buttonFalse"}>
            <h1>
              Successfully Logged in with the Token :
              <span>{this.context.responseData}</span>
            </h1>
          </div>
        ) : (
          <div className="logout-message">
            <h1>Succesfully Logged Out</h1>
          </div>
        )}

        <Footer />
      </div>
    );
  }
}
Dashboard.contextType = AuthContext;

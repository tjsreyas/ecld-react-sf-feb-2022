import axios from "axios";
import React, { Component } from "react";
import "./Child.css";
import Login from "./Login";

class Child extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      data: [],
      details: [],
      showTable: false,
      showDetails: false,
      isLoggedOut: false,
    };
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
      showDetails: ''
    });
  };
  handleSearch = () => {
    axios
      .get("https://api.github.com/search/users?", {
        params: {
          q: this.state.name,
        },
      })
      .then((res) => {
        this.setState({
          data: res.data.items,
          showTable: true,
        });
      })
      .catch((err) => console.log(err));
  };

  handleDetails = (login) => {
    axios.get("https://api.github.com/users/" + login).then((res) => {
      this.setState({
        details: res.data,
        showDetails: true,
      }).catch((err) => {
        console.log(err);
      });
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedOut: true,
    });
  };
  render() {
    if (this.state.isLoggedOut) {
      return <Login />;
    }
    console.log(this.state.data, "data");
    return (
      <div>
        <button className="logout" onClick={this.handleLogout}>
          Logout
        </button>
        <div className="input-search">
          <input
            className="user-input"
            placeholder="Search User"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button className="search-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
        <div className="details-container">
          {this.state.showDetails && (
            <table>
              <tr>
                <th>CREATED-DATE</th>
                <th>REPOSITORIES</th>
                <th>FOLLOWERS</th>
              </tr>

              <tr>
                <td>{this.state.details.created_at}</td>
                <td>{this.state.details.public_repos}</td>
                <td>{this.state.details.followers}</td>
              </tr>
            </table>
          )}
        </div>
        <div className="table-container">
          {this.state.showTable && (
            <table>
              <tr>
                <th>NAME</th>
                <th>PROFILE</th>
                <th>DETAILS</th>
              </tr>
              {this.state.data.map((items) => {
                return (
                  <tr>
                    <td>{items.login}</td>
                    <td>
                      <img
                        width="100px"
                        height="100px"
                        src={items.avatar_url}
                        alt=""
                      />
                    </td>
                    <td>
                      <button
                        className="details-btn"
                        onClick={() => this.handleDetails(items.login)}
                      >
                        More Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          )}
        </div>
      </div>
    );
  }
}
export default Child;

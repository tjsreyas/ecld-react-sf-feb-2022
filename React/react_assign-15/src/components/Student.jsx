import React, { Component } from "react";
import axios from "axios";
import "./Student.css";
import { Pagination } from "./Pagination";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      students: [],
      details: [],
      currentPage: 1,
      showDetails: false,
    };
  }

  handleSearch = () => {
    axios
      .get("https://deploy-mock-server.herokuapp.com/students", {
        params: {
          q: this.state.name,
        },
      })
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    
    this.setState({
      name: event.target.value,
      showDetails: true,
    });
  };

  handleDetails = (id) => {
    axios
      .get("https://deploy-mock-server.herokuapp.com/students/" + id)
      .then((res) => {
        this.setState({
          details: res.data,
          showDetails: true,
        }).catch((err) => {
          console.log(err);
        });
      });
  };

  close = () => {
    this.setState({
      showDetails: false,
    });
  };

  fetchStudents = () => {
    axios
      .get("https://deploy-mock-server.herokuapp.com/students")
      .then((result) => {
        this.setState({
          students: result.data,
        });
      })
      .catch((error) => console.log(error));
  };

  handleReset = () => {
    this.fetchStudents();
    this.setState({
      name: "",
    });
  };

   handlePage = (num)=>{
    this.setState({
      currentPage: num
    })
 }
  componentDidMount() {
    this.fetchStudents();
  }
  render() {
    console.log(this.state);
    const { students, currentPage } = this.state;
    const perPage = 4;
    const totalPages = Math.ceil(students.length / perPage);
    return (
      <>
        <div className="main-div">
          <div className="input-search">
            <input
              className="user-input"
              placeholder="Search Student"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <button className="search-btn" onClick={this.handleSearch}>
              Search
            </button>
            <button className="search-btn" onClick={this.handleReset}>
              Reset
            </button>
          </div>

          <div className="details-container">
            {this.state.showDetails && (
              <div className="show-details">
                <div>
                  <button className="close-btn" onClick={this.close}>
                    X
                  </button>
                </div>
                <img src={this.state.details.picture} alt="" />
                <div>{this.state.details.first_name}</div>
                <div>{this.state.details.gender}</div>
                <div>{this.state.details.email}</div>
                <div>{this.state.details.address}</div>
                <div>{this.state.details.phone}</div>
              </div>
            )}
          </div>

          <div className="students-container">
            {
            students.filter((_, index) => index >= (currentPage - 1)* perPage && index < currentPage * perPage)
            .map((student) => {
                return (
                  <div className="student-container" key={student.id}>
                    <img src={student.picture} alt="" />
                    <h2>{student.first_name}</h2>
                    <button
                      className="details-btn"
                      onClick={() => this.handleDetails(student.id)}
                    >
                      View More
                    </button>
                  </div>
                );
              })}
          </div>

          <Pagination totalPages={totalPages} handlePage={this.handlePage} />
        </div>
      </>
    );
  }
}

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
import "./Student.css";
export const Students = () => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit] = useState(6);
  const [sortFilterValue, setSortFilterValue] = useState("");
  const [operation, setOperation] = useState("");
  const sortOptions = ["first_name", "email", "country"];
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getComments(0, 6, 0);
  }, []);

  const getComments = (
    start,
    end,
    increase,
    optType = null,
    filterOrSortValue
  ) => {
    switch (optType) {
      case "search":
        setOperation(optType);
        setSortValue("");
        axios
          .get(
            `https://deploy-mock-server.herokuapp.com/students?q=${value}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
        break;
      case "sort":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        axios
          .get(
            `https://deploy-mock-server.herokuapp.com/students?_sort=${filterOrSortValue}&_order=asc&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
        break;
      case "filter":
        setOperation(optType);
        setSortFilterValue(filterOrSortValue);
        axios
          .get(
            `https://deploy-mock-server.herokuapp.com/students?gender=${filterOrSortValue}&_start=${start}&_end=${end}`
          )
          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
        break;
      default:
        axios
          .get(
            `https://deploy-mock-server.herokuapp.com/students?q=${value}&_start=${start}&_end=${end}`
          )

          .then((response) => {
            setItems(response.data);
            setCurrentPage(currentPage + increase);
          })
          .catch((err) => console.log(err));
    }
  };

  console.log(items);

  const handleSearch = (e) => {
    e.preventDefault();
    getComments(0, 6, 0, "search", value);
    // axios
    //   .get(`https://deploy-mock-server.herokuapp.com/students?q=${value}`)
    //   .then((response) => {
    //     setItems(response.data);
    //     setValue("");
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleSort = (e) => {
    let value = e.target.value;
    // console.log(value);
    setSortValue(value);
    getComments(0, 6, 0, "sort", value);
    // axios
    //   .get(
    //     `https://deploy-mock-server.herokuapp.com/students?_sort=first_name&_order=${value}`
    //   )
    //   .then((response) => {
    //     setItems(response.data);
    //   })
    //   .catch((err) => console.log(err));
  };

  const handleFilter = (value) => {
    getComments(0, 6, 0, "filter", value);
    //   axios
    //     .get(
    //       `https://deploy-mock-server.herokuapp.com/students?gender=${value}`
    //     )
    //     .then((response) => {
    //       setItems(response.data);
    //     })
    //     .catch((err) => console.log(err));
  };

  const handleReset = () => {
    setOperation("");
    setValue("");
    setSortFilterValue("");
    setSortValue("");
    setCurrentPage(0);
    getComments(0, 6, 0);
  };

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const renderPagination = () => {
    if (items.length < 6 && currentPage === 0) return null;
    if (currentPage === 0) {
      return (
        <>
          <button className="pageBtn1">1</button>
          <button
            className="pageBtn"
            onClick={() => getComments(6, 12, 1, operation, sortFilterValue)}
          >
            next
          </button>
        </>
      );
    } else if (currentPage < pageLimit - 1 && items.length === pageLimit) {
      return (
        <>
          <button
            className="pageBtn"
            onClick={() =>
              getComments(
                (currentPage - 1) * 6,
                currentPage * 6,
                -1,
                operation,
                sortFilterValue
              )
            }
          >
            prev
          </button>
          <button className="pageBtn1">{currentPage + 1}</button>
          <button
            className="pageBtn"
            onClick={() =>
              getComments(
                (currentPage + 1) * 6,
                (currentPage + 2) * 6,
                1,
                operation,
                sortFilterValue
              )
            }
          >
            next
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="pageBtn"
            onClick={() =>
              getComments(
                (currentPage - 1) * 6,
                currentPage * 6,
                -1,
                operation,
                sortFilterValue
              )
            }
          >
            prev
          </button>
          <button className="pageBtn1">{currentPage + 1}</button>
        </>
      );
    }
  };

  return (
    <div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <form className="input-search" onSubmit={handleSearch}>
        <input
          type="text"
          className="user-input"
          placeholder="Search Student"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-btn">Search</button>
        <button className="search-btn" onClick={handleReset}>
          Reset
        </button>
      </form>

      <div className="row m-2">
        {items.map((item) => {
          return (
            <div className="col-sm-5 col-md-4 v my-2" key={item.id}>
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <img src={item.picture} alt="" />
                  <h2>{item.first_name}</h2>
                  <h5>{item.email}</h5>
                  <h5>{item.gender}</h5>
                  <h5>{item.country}</h5>

                  <Link to={`${item.id}`}>View More</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">{renderPagination()}</div>

      <div className="sort">
        <h4>Sort By:</h4>
        <select
          style={{ width: "20%", borderRadius: "2px", height: "35px" }}
          onChange={handleSort}
          value={sortValue}
        >
          <option>Please select value</option>
          {sortOptions.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="filter">
        <h4>Filter by Gender:</h4>
        <button
          className="btn btn-success"
          onClick={() => handleFilter("Male")}
        >
          Male
        </button>
        <button
          className="btn btn-danger"
          onClick={() => handleFilter("Female")}
        >
          Female
        </button>
      </div>
    </div>
  );
};

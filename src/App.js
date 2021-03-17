import "./App.css";
import React, { useState, useEffect } from "react";
import List from "./components/List";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./JS/actions/appActions";
import AddUser from "./components/AddUser";
import AppNavbar from "./components/AppNavbar";

function App() {
  const dispatch = useDispatch();

  const getting = () => dispatch(getUsers());

  useEffect(() => {
    getting();
  }, []);

  const users = useSelector((state) => state.users);

  const [searched, setSearched] = useState("");
  const [searchedage, setSearchedage] = useState("");
  const [searchedsalary, setSearchedsalary] = useState("");

  return (
    <div className="App">

<AppNavbar />

      <h1>Technical Test DATAHORIZON</h1>

      <AddUser />
      <div style={{ margin: "30px" }}>
        <input
          type="text"
          placeholder="Filter by name"
          name="Search"
          style={{ borderRadius: "30px", width: "400px" }}
          onChange={(e) => setSearched(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by Age"
          name="Filter by name"
          style={{ borderRadius: "30px", width: "400px" }}
          onChange={(e) => setSearchedage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter By Salary"
          name="Search"
          style={{ borderRadius: "30px", width: "400px" }}
          onChange={(e) => setSearchedsalary(e.target.value)}
        />
      </div>
      <List
        users={users}
        searched={searched}
        searchedage={searchedage}
        searchedsalary={searchedsalary}
      />
    </div>
  );
}

export default App;

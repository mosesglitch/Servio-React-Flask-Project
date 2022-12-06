import React, { useState, useEffect } from "react";
import $ from "jquery";
import ProfilePage from "./components/profile";
import Dropdown from "./components/Dropdown";
import "./components/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./components/List";
import ProfileForm from "./components/ProfileForm";
import MyNavbar from "./components/Navbar";
import profilePage from "./components/profile";
import Imageupload from "./components/Imageupload";

function App() {
  // useEffect(() => {
  //   fetch("/members")
  //     .then((res) => {
  //       console.log(res.json());
  //       res.json();
  //     })
  //     .then((data) => {
  //       setdata({
  //         name: data.Name,
  //         age: data.Age,
  //         date: data.Date,
  //         programming: data.programming,
  //       });
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <MyNavbar />
    </div>
  );
}

export default App;

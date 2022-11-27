import React, { useState, useEffect } from "react";
import $ from "jquery";
import ProfilePage from "./components/profile";
import Dropdown from "./components/Dropdown";
import "./components/styles.css";

import List from "./components/List";
import ProfileForm from "./components/ProfileForm";
function App() {
  const [data, setdata] = useState({
    name: {},
    age: {},
    programming: {},
  });
  useEffect(() => {
    $.ajax({
      url: `/profile`,
      type: "GET",
      dataType: "json",
      success: (result) => {
        setdata({
          name: result.data.Name,
          age: result.data.Age,
          programming: result.data.programming,
        });
        return;
      },
      error: (error) => {
        alert("Unable to load data. Please try your request again");
        return;
      },
    });
  }, []);
  console.log(data);
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
      <h1>React and flask</h1>

      <ProfileForm />
      <List data={data} />
      <ProfilePage />
    </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { options, nairobi } from "./Options";
import "./styles.css";
import $ from "jquery";
const Search = ({ setSearchList, getSearchInfo }) => {
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");
  const handleSkillSelect = (seletedSkill) => {
    setSkill(seletedSkill);
  };
  const handleLocationSelect = (seletedlocation) => {
    setLocation(seletedlocation);
  };
  const searchDB = (e) => {
    e.preventDefault();
    getSearchInfo(location, skill);
    setSearchList(true);
    // console.log("piki ponky");
    // $.ajax({
    //   url: "/profile/search",
    //   type: "POST",
    //   dataType: "json",
    //   contentType: "application/json",
    //   data: JSON.stringify({
    //     location: location.label,
    //     skill: skill.label,
    //   }),
    //   xhrFields: {
    //     withCredentials: true,
    //   },
    //   crossDomain: true,
    //   success: (result) => {
    //     return;
    //   },
    //   error: (error) => {
    //     alert("Unable to load question. Please try your request again");
    //     return;
    //   },
    // });
  };
  return (
    <div className="searchbar">
      <form onSubmit={searchDB}>
        <Dropdown
          label="location"
          selected={location}
          onSelectedChange={handleLocationSelect}
          options={nairobi}
        />
        <Dropdown
          label="service"
          selected={skill}
          onSelectedChange={handleSkillSelect}
          options={options}
        />
        <input type="submit" value="search" />
      </form>
      <button onClick={() => setSearchList(false)}>cancel</button>
    </div>
  );
};
export default Search;

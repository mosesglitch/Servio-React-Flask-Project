import React, { useState, useEffect } from "react";
import $ from "jquery";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBIcon,
  MDBBadge,
  MDBCardFooter,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";
import ProfilePage from "./Profilepage";
import Search from "./Search";
import "./List.css";
import "./styles.css";

const List = () => {
  // const [selectedSP, setSelectedSP] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [skill, setSkill] = useState("");
  const [location, setLocation] = useState("");

  const [data, setdata] = useState([
    {
      id: "0",
      name: "John Doe",
      location: "Nairobi",
      about: "Way Down,We go",
      skill: "Masseuse",
      availability: "Available",
      image: "image",
    },
  ]);
  const [theeSelected, setTheSelecteddata] = useState({});
  const [totalServers, settotalServers] = useState(0);
  const [page, setPage] = useState(1);
  const [searchList, setSearchList] = useState(false);
  const getSearchInfo = (location, skill) => {
    setLocation(location);
    setSkill(skill);
    console.log(location, skill, "pappito");
  };
  useEffect(() => {
    getServices();
  }, [page, searchList, location, skill]);
  const getServices = () => {
    $.ajax({
      url: !searchList ? `/profile` : `/profile/search`,
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        location: location.label,
        skill: skill.label,
      }),
      xhrFields: {
        withCredentials: true,
      },
      crossDomain: true,
      success: (result) => {
        setdata(result.service);
        settotalServers(result.total_services);
        return;
      },
      error: (error) => {
        alert("Unable to load data. Please try your request again");
        return;
      },
    });
  };

  console.log(searchList);
  const setSelectedSP = (selected) => {
    const filterById = (server) => {
      return server.id == selected;
    };
    const selectedSP = data.filter(filterById);
    setTheSelecteddata(selectedSP[0]);
    console.log(theeSelected);
    return selectedSP;
  };
  // console.log("theesele", theeSelected);
  // console.log("data", data);
  // console.log("ssp", selectedSP);
  const selectPage = (num) => {
    setPage(num);
    getServices();
  };

  const createPagination = () => {
    let pageNumbers = [];
    let maxPage = Math.ceil(totalServers / 2);
    for (let i = 1; i <= maxPage; i++) {
      pageNumbers.push(
        <>
          <span
            key={i}
            className={`page-num ${i === page ? "active" : ""}`}
            onClick={() => {
              selectPage(i);
            }}
          >
            {i}
          </span>
        </>
      );
    }
    return pageNumbers;
  };

  const SProvider = data.map((sp) => (
    <MDBCol xl={6} className="mb-3" key={sp.id}>
      <MDBCard>
        <MDBCardBody
          onClick={() => {
            setSelectedSP(sp.id);
            setShowProfile(true);
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={
                  sp.image_link
                    ? `profile_pics/${sp.image_link}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwial6oKnqe0VTFem0n2gERixQWcuxgzhdg&usqp=CAU}"
                }
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{sp.name}</p>
                <p className="text-muted mb-0">{sp.email}</p>
              </div>
            </div>
            <MDBBadge pill color="success" light>
              {sp.availability}
            </MDBBadge>
          </div>
        </MDBCardBody>
        <MDBCardFooter
          background="light"
          border="0"
          className="p-2 d-flex justify-content-around"
        >
          <MDBBtn
            color="link"
            rippleColor="primary"
            className="text-reset m-0"
            a
            href="sms:+255753782444"
          >
            Message <MDBIcon fas icon="envelope" />
          </MDBBtn>
          <MDBBtn
            color="link"
            rippleColor="primary"
            className="text-reset m-0"
            a
            href="tel:+255753782444"
          >
            Call <MDBIcon fas icon="phone" />
          </MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  ));
  // const showWhat = showProfile ? (
  //   <MDBRow>{SProvider}</MDBRow>
  // ) : (
  //   <ProfilePage selectedSP={4} />
  // );

  if (!showProfile) {
    return (
      <div className="app-list">
        <Search setSearchList={setSearchList} getSearchInfo={getSearchInfo} />
        <MDBRow className="app-list">{SProvider}</MDBRow>
        <div className="pagination-menu">{createPagination()}</div>
      </div>
    );
  }
  return (
    <>
      <ProfilePage theeSelected={theeSelected} />
    </>
  );
};

export default List;

import React, { useState, useEffect } from "react";
import $ from "jquery";
import ProfilePage from "./profile";
import Dropdown from "./Dropdown";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import profilePage from "./profile";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import List from "./List";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import "bootstrap/dist/css/bootstrap.min.css";

function MyNavbar() {
  const [profiles, setdata] = useState([
    {
      id: "0",
      name: "John Doe",
      location: "Nairobi",
      about: "Way Down,We go",
      skill: "Masseuse",
      availability: "Available",
    },
  ]);
  useEffect(() => {
    $.ajax({
      url: `/profile`,
      type: "GET",
      dataType: "json",
      success: (result) => {
        setdata(result.service);
        return;
      },
      error: (error) => {
        alert("Unable to load data. Please try your request again");
        return;
      },
    });
  }, []);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Servio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Router>
              <Nav.Link href="#action1">
                <Link to="/profile">Profile</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link to="/list">List</Link>
              </Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
              <Routes>
                {/* <Route exact path="/" element={<Home />}></Route> */}
                <Route
                  exact
                  path="/profile"
                  element={<ProfilePage data={profiles} />}
                ></Route>
                <Route
                  exact
                  path="/list"
                  element={<List data={profiles} />}
                ></Route>
              </Routes>
            </Router>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import Container from "react-bootstrap/Container";

import List from "./List";

function MyNavbar() {
  return (
    <Router>
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
              <Nav.Link href="#action1">
                <Link to="/profileform">Register</Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link to="/list">List</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/profileform" element={<ProfileForm />}></Route>
        <Route exact path="/list" element={<List />}></Route>
      </Routes>
    </Router>
  );
}

export default MyNavbar;

import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBInput,
  MDBBadge,
  MDBCardFooter,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

const ProfileForm = () => {
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <MDBContainer>
      <MDBInput label="Phone number input" id="typePhone" type="tel" />
      <MDBInput label="URL input" id="typeURL" type="url" />
      <MDBTextArea label="Message" id="textAreaExample" rows={4} />
    </MDBContainer>
  );
};
export default ProfileForm;

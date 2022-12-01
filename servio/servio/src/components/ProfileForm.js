import React from "react";
import Dropdown from "react-dropdown";
import $ from "jquery";
import "react-dropdown/style.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBInput,
  MDBCard,
  // MDBSelect,
  MDBCardText,
  MDBCardBody,
  MDBCheckbox,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      about: "",
      skill: "",
      availability: "",
    };
  }
  changeName = (e) => {
    this.setState({ name: e.target.value });
  };
  changeLocation = (e) => {
    this.setState({ location: e.target.value });
  };
  changeAbout = (e) => {
    this.setState({ about: e.target.value });
  };
  changeSkill = (e) => {
    this.setState({ skill: e.target.value });
  };
  changeAvailability = (e) => {
    this.setState({ availability: e.target.value });
  };
  postToDb = (e) => {
    e.preventDefault();
    $.ajax({
      url: "/addprofile", //TODO: update request URL
      type: "POST",
      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({
        name: this.state.name,
        location: this.state.location,
        about: this.state.about,
        skill: this.state.skill,
        availability: this.state.availability,
      }),
      xhrFields: {
        withCredentials: true,
      },
      crossDomain: true,
      success: (result) => {
        console.log("awesome");
        // console.log(result.first);
        // this.setState({
        //   showAnswer: false,
        //   previousQuestions: previousQuestions,
        //   currentQuestion: result.question,
        //   guess: "",
        //   forceEnd: result.question ? false : true,
        // });
        return;
      },
      error: (error) => {
        alert("Unable to load question. Please try your request again");
        return;
      },
    });
  };

  render() {
    console.log(this.state.name);
    return (
      <MDBContainer fluid className="h-custom">
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12" className="m-5">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow>
                  <MDBCol md="6" className="p-5 bg-white">
                    <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                      General Infomation
                    </h3>
                    {/* <MDBSelect
                    className="mb-4"
                    size="lg"
                    data={[
                      { text: "Titile", value: 1 },
                      { text: "Two", value: 2 },
                      { text: "Three", value: 3 },
                      { text: "Four", value: 4 },
                    ]}
                  /> */}

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Name"
                          size="lg"
                          onChange={this.changeName}
                          id="form1"
                          type="text"
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Location"
                          onChange={this.changeLocation}
                          size="lg"
                          id="form2"
                          type="text"
                          // value={inputValue}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="About"
                          onChange={this.changeAbout}
                          size="lg"
                          id="form2"
                          type="text"
                          // value={inputValue}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Skill"
                          onChange={this.changeSkill}
                          size="lg"
                          id="form2"
                          type="text"
                          // value={inputValue}
                        />
                      </MDBCol>
                    </MDBRow>
                    {/* 
                  <MDBSelect
                    className="mb-4"
                    size="lg"
                    data={[
                      { text: "Position", value: 1 },
                      { text: "Two", value: 2 },
                      { text: "Three", value: 3 },
                      { text: "Four", value: 4 },
                    ]}
                  /> */}
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Availability"
                      onChange={this.changeAvailability}
                      size="lg"
                      id="form3"
                      type="text"
                    />

                    <MDBRow>
                      <MDBCol md="6">
                        {/* <MDBSelect
                        className="mb-4"
                        size="lg"
                        data={[
                          { text: "Employees", value: 1 },
                          { text: "Two", value: 2 },
                          { text: "Three", value: 3 },
                          { text: "Four", value: 4 },
                        ]}
                      /> */}
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>

                  <MDBCol md="6" className="bg-indigo p-5">
                    <h3
                      className="fw-normal mb-5 text-white"
                      style={{ color: "#4835d4" }}
                    >
                      Contact Details
                    </h3>
                    {/* <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Street + Nr"
                    size="lg"
                    id="form5"
                    type="text"
                  /> */}
                    {/* <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Additional Information"
                    size="lg"
                    id="form6"
                    type="text"
                  /> */}

                    <MDBRow>
                      {/* <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Zip Code"
                        size="lg"
                        id="form6"
                        type="text"
                      />
                    </MDBCol> */}

                      {/* <MDBCol md="7">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Place"
                        size="lg"
                        id="form7"
                        type="text"
                      />
                    </MDBCol> */}
                    </MDBRow>

                    {/* <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Country"
                    size="lg"
                    id="form8"
                    type="text"
                  /> */}

                    {/* <MDBRow>
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Code +"
                        size="lg"
                        id="form9"
                        type="text"
                      />
                    </MDBCol>

                    <MDBCol md="7">
                      <MDBInput
                        wrapperClass="mb-4"
                        labelClass="text-white"
                        label="Phone Number"
                        size="lg"
                        id="form10"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow> */}

                    {/* <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Your Email"
                    size="lg"
                    id="form8"
                    type="email"
                  /> */}

                    <MDBCheckbox
                      name="flexCheck"
                      id="flexCheckDefault"
                      labelClass="text-white mb-4"
                      label="I do accept the Terms and Conditions of your site."
                    />
                    <MDBBtn color="light" size="lg" onClick={this.postToDb}>
                      Register
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProfileForm;

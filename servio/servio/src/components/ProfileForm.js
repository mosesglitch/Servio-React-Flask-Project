import React from "react";
import Dropdown from "./Dropdown";
import $ from "jquery";
import { options, nairobi } from "./Options";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBBtn,
} from "mdb-react-ui-kit";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: nairobi[0],
      locationd: nairobi[0],
      about: "",
      skill: options[0],
      skilld: options[0],
      availability: "",
      image_link: "",
      email: "",
      phone: "",
      facebook: "",
      twitter: "",
    };
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeAbout = (e) => {
    this.setState({ about: e.target.value });
  };

  changeAvailability = (e) => {
    this.setState({ availability: e.target.value });
  };
  handleUploadImage = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);
  };
  changeLocation = (selectedLocation) => {
    this.setState({ location: selectedLocation });
    this.setState({ locationd: selectedLocation.label });
  };
  handleSkillSelect = (selectedSkill) => {
    this.setState({ skill: selectedSkill });
    this.setState({ skilld: selectedSkill.value });
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
        location: this.state.locationd,
        about: this.state.about,
        skill: this.state.skilld,
        availability: this.state.availability,
        image_link: this.state.image_link,
        email: this.state.email,
        phone: this.state.phone,
        facebook: this.state.facebook,
        twitter: this.state.twitter,
      }),
      xhrFields: {
        withCredentials: true,
      },
      crossDomain: true,
      success: (result) => {
        return;
      },
      error: (error) => {
        alert("Unable to load question. Please try your request again");
        return;
      },
    });
  };

  render() {
    return (
      <MDBContainer fluid className="h-custom">
        <MDBRow
          className="d-flex justify-content-ce },
  {nter align-items-center h-100"
        >
          <MDBCard
            className="card-registration card-registration-2"
            style={{ borderRadius: "15px" }}
          >
            <MDBCardBody className="p-0">
              <MDBRow>
                <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                  General Infomation
                </h3>

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

                    <MDBInput
                      wrapperClass="mb-4"
                      label="About"
                      onChange={(e) => this.setState({ about: e.target.value })}
                      size="lg"
                      id="form2"
                      type="text"
                      // value={inputValue}
                    />
                    <Dropdown
                      label="Select your location"
                      selected={this.state.location}
                      onSelectedChange={this.changeLocation}
                      options={nairobi}
                    />
                    <br />

                    <Dropdown
                      label="Select your skill"
                      selected={this.state.skill}
                      onSelectedChange={this.handleSkillSelect}
                      options={options}
                    />

                    <br />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Availability"
                      onChange={(e) =>
                        this.setState({ availability: e.target.value })
                      }
                      size="lg"
                      id="form2"
                      type="text"
                      // value={inputValue}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      onChange={(e) => this.setState({ Email: e.target.value })}
                      size="lg"
                      id="form2"
                      type="text"
                      // value={inputValue}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Phone"
                      onChange={(e) => this.setState({ phone: e.target.value })}
                      size="lg"
                      id="form2"
                      type="text"
                      // value={inputValue}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Facebook"
                      onChange={(e) =>
                        this.setState({ facebook: e.target.value })
                      }
                      size="lg"
                      id="form2"
                      type="text"
                      // value={inputValue}
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Twitter"
                      onChange={(e) =>
                        this.setState({ twitter: e.target.value })
                      }
                      size="lg"
                      id="form2"
                      type="text"
                      // value={inputValue}
                    />
                    <MDBBtn color="light" size="lg" onClick={this.postToDb}>
                      Register
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProfileForm;

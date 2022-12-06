import React from "react";
import Dropdown from "./Dropdown";
import $ from "jquery";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTextArea,
  MDBInput,
  MDBCard,
  MDBSelect,
  MDBCardText,
  MDBCardBody,
  MDBCheckbox,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
const options = [
  {
    label: "Masseuse",
    value: "Masseuse",
  },
  {
    label: "Hairdresser",
    value: "Hairdresser",
  },
  {
    label: "Manicure",
    value: "Manicure",
  },
  {
    label: "Facial",
    value: "Facial",
  },
];

const nairobi = [
  {
    label: "Dagoretti North",
    value: ["Kilimani", "Kawangware", "Gatina", "Kileleshwa", "Kabiro"],
  },
  {
    label: "Dagoretti South",
    value: ["Mutu-ini", "Ng'ando", "Riruta", "Uthiru/Ruthimitu", "Waithaka"],
  },
  {
    label: "Langata",
    value: [
      "Karen",
      "Nairobi West",
      "Mugumo-ini",
      "South C",
      "Nyayo Highrise",
      "Otiende ",
    ],
  },
  {
    label: "Kibra",
    value: [
      "Laini Saba",
      "Lindi",
      "Makina",
      "Woodley/ Kenyatta Golf Course",
      "Sarang'ombe",
    ],
  },
  {
    label: "Kasarani",
    value: ["Clay City", "Mwiki", "Kasarani", "Njiru", "Ruai ", "Kamulu"],
  },
  {
    label: "Roysambu",
    value: [
      "Roysambu",
      "Garden Estate",
      "Ridgeways",
      "Githurai",
      "Kahawa West",
      "Zimmermann",
      "Kahawa",
    ],
  },
  {
    label: "Ruaraka",
    value: ["Babadogo", "Utalii", "Mathare North", "Lucky Summer", "Korogocho"],
  },
  {
    label: "Embakasi Central",
    value: [
      "Kayole North",
      "Kayole North Central",
      "Kayole South",
      "Komarock",
      "Matopeni/ Spring Valley",
    ],
  },
  {
    label: "Embakasi East",
    value: [
      "Upper Savanna",
      "Lower Savanna",
      "Embakasi",
      "Utawala",
      "Mihang'o",
    ],
  },
  {
    label: "Embakasi North",
    value: [
      "Kariobangi North",
      "Dandora Area I",
      "Dandora Area II",
      "Dandora Area III",
      "Dandora Area IV",
    ],
  },
  {
    label: "Embakasi South",
    value: ["Imara Daima", "Kwa Njenga", "Kwa Reuben", "Pipeline", "Kware"],
  },
  {
    label: "Embakasi West",
    value: ["Umoja I", "Umoja II", "Mowlem", "Kariobangi South"],
  },
  {
    label: "Kamukunji",
    value: [
      "Pumwani",
      "Eastleigh North",
      "Eastleigh South",
      "Airbase",
      "California",
    ],
  },
  {
    label: "Makadara",
    value: [
      "Maringo/ Hamza",
      "Viwandani",
      "Harambee",
      "Makongeni",
      "Mbotela ",
      "Bahati",
    ],
  },
  {
    label: "Mathare",
    value: [
      "Hospital",
      "Mabatini",
      "Huruma",
      "Ngei",
      "Mlango Kubwa",
      "Kiamaiko",
    ],
  },
  {
    label: "Starehe",
    value: [
      "Nairobi Central",
      "Ngara",
      "Pangani",
      "Ziwani/ Kariokor",
      "Landimawe",
      "Nairobi South",
    ],
  },
  {
    label: "Westlands",
    value: [
      "Kitisuru",
      "Parklands/Highridge",
      "Karura",
      "Kangemi",
      "Mountain View",
    ],
  },
];

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
  // changeSkill = (e) => {
  //   this.setState({ skill: e.target.value });
  // };
  changeAvailability = (e) => {
    this.setState({ availability: e.target.value });
  };
  handleUploadImage = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", this.fileName.value);
    console.log(data);
  };
  changeLocation = (selectedLocation) => {
    this.setState({ location: selectedLocation });
    this.setState({ locationd: selectedLocation.label });
  };
  handleSkillSelect = (selectedSkill) => {
    this.setState({ skill: selectedSkill });
    this.setState({ skilld: selectedSkill.value });
    console.log(selectedSkill.value);
  };
  postToDb = (e) => {
    const conkeys = [];
    // for (let i = 0; i < nairobi.length; i++) {
    //   conkeys.push(i.keys());
    // }
    Object.entries(nairobi).forEach(([key, value]) => {
      console.log("keykey", key, "valuvalu", value);
    });
    console.log(conkeys);
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
    console.log(this.state.facebook, this.state.twitter);
  };

  render() {
    console.log(this.state.name);
    return (
      <MDBContainer fluid className="h-custom">
        <MDBRow
          className="d-flex justify-content-ce },
  {nter align-items-center h-100"
        >
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

                        <MDBInput
                          wrapperClass="mb-4"
                          label="About"
                          onChange={(e) =>
                            this.setState({ about: e.target.value })
                          }
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
                          onChange={(e) =>
                            this.setState({ Email: e.target.value })
                          }
                          size="lg"
                          id="form2"
                          type="text"
                          // value={inputValue}
                        />

                        <MDBInput
                          wrapperClass="mb-4"
                          label="Phone"
                          onChange={(e) =>
                            this.setState({ phone: e.target.value })
                          }
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

                    <MDBRow></MDBRow>

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

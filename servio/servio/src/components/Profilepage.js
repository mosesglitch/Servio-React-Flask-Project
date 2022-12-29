import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Imageupload from "./Imageupload";
import "./styles.css";

export default function ProfilePage({ theeSelected }) {
  const [uploadPage, showUploadPage] = useState(false);
  const [profileId, setUserId] = useState(1);
  const backToProfile = () => {
    showUploadPage(false);
  };
  useEffect(() => {
    setUserId(theeSelected.id);
  }, []);

  // console.log(theeSelected.id);
  // setUserId(theeSelected.id);
  if (!uploadPage)
    return (
      <div className="gradient-custom-2" style={{ backgroundColor: "#E6E6FA" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ height: "200px" }}
                >
                  <div
                    className="ms-4 mt- d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src={
                        theeSelected.image_link
                          ? `profile_pics/${theeSelected.image_link}`
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwial6oKnqe0VTFem0n2gERixQWcuxgzhdg&usqp=CAU}"
                      }
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "200px", height: "200px", zIndex: "1" }}
                    />

                    {/* <MDBBtn
                      outline
                      color="dark"
                      style={{ height: "36px", overflow: "visible" }}
                      onClick={() => {
                        showUploadPage(true);
                      }}
                    >
                      Edit profile
                    </MDBBtn> */}
                  </div>
                  <div className="ms-5" style={{ marginTop: "130px" }}>
                    <MDBTypography
                      tag="h5"
                      style={{ fontSize: "35px", fontFamily: "cursive" }}
                    >
                      {theeSelected.name}
                    </MDBTypography>
                    <MDBCardText style={{ fontFamily: "fantasy" }}>
                      {theeSelected.location}
                    </MDBCardText>
                  </div>
                </div>
                <div
                  className="pt-5 mt-3 pl-3 text-black "
                  style={{
                    backgroundColor: "white",
                    paddingTop: "250px",
                  }}
                >
                  <p>
                    <MDBIcon fas icon="briefcase" className="pr-2" />
                    Chef
                  </p>
                  <p>
                    <MDBIcon fas icon="clock" className="pr-2" />
                    24hrs
                  </p>
                  <p>
                    <MDBIcon fas icon="map-marker-alt" className="pr-2" />
                    Mwanza
                  </p>
                  <div
                    className="d-flex bd-highlight mb-0 mt-10 "
                    style={{ paddingTop: "0px", paddingLeft: "0px" }}
                  >
                    <MDBBtn
                      className="md-auto p-2 bd-highlight"
                      style={{ backgroundColor: "black", width: "100px" }}
                      href="#"
                    >
                      <MDBCardText>Call</MDBCardText>
                    </MDBBtn>
                    <MDBBtn
                      className="me-auto p-2 bd-highlight"
                      style={{ backgroundColor: "black", width: "100px" }}
                      href="#"
                    >
                      <MDBCardText>SMS</MDBCardText>
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#"
                    >
                      <MDBIcon fab icon="facebook-f" />
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#55acee" }}
                      href="#"
                    >
                      <MDBIcon fab icon="twitter" />
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#dd4b39" }}
                      href="#"
                    >
                      <MDBIcon fab icon="google" />
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#ac2bac" }}
                      href="#"
                    >
                      <MDBIcon fab icon="instagram" />
                    </MDBBtn>

                    <MDBBtn
                      className="m-1"
                      style={{ backgroundColor: "#0082ca" }}
                      href="#"
                    >
                      <MDBIcon fab icon="linkedin-in" />
                    </MDBBtn>
                  </div>
                </div>

                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <MDBCardText className="font-italic mb-1">
                        {theeSelected.skill}
                      </MDBCardText>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Recent photos
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <MDBRow>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="g-2">
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                    <MDBCol className="mb-2">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1"
                        className="w-100 rounded-3"
                      />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  else return <Imageupload backtoprof={backToProfile} profileId={profileId} />;
}

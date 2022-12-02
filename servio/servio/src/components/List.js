import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBIcon,
  MDBBadge,
  MDBCardFooter,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import ProfilePage from "./profile";

// class List extends Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// export default List;

const List = ({ data }) => {
  const [selectedSP, setSelectedSP] = useState("0");
  const [showProfile, setShowProfile] = useState(false);

  console.log(showProfile, selectedSP);
  const SProvider = data.map((sp) => (
    <MDBCol
      xl={6}
      className="mb-4"
      key={sp.id}
      onClick={() => {
        setSelectedSP(sp.id);
        setShowProfile(true);
      }}
    >
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">{sp.name}</p>
                <p className="text-muted mb-0">john.doe@gmail.com</p>
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
          <MDBBtn color="link" rippleColor="primary" className="text-reset m-0">
            Message <MDBIcon fas icon="envelope" />
          </MDBBtn>
          <MDBBtn color="link" rippleColor="primary" className="text-reset m-0">
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
    return <MDBRow>{SProvider}</MDBRow>;
  }
  return (
    <>
      <ProfilePage selectedSP={4} />
    </>
  );
};

export default List;

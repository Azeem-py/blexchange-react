import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBBtn } from "mdb-react-ui-kit";
import handshake from "../img/Handshake.png";

function HeaderBanner() {
  return (
    <>
      <header>
        <MDBContainer fluid>
          <MDBRow className="headerBanner pt-5">
            <MDBCol md="5" middle>
              <h2>WELCOME TO BLEXCHANGE</h2>
              <p>
                This is a platform that gives you the ability to give, get and
                manage backlinks. You can get your post featured on blogs
                without so much stress.
              </p>
              <MDBBtn
                outline
                color="primary"
                size="lg"
                className="mr-2 headerBtn"
              >
                LOGIN
              </MDBBtn>
              <MDBBtn
                outline
                color="danger "
                size="lg"
                className="mx-2 headerBtn"
              >
                SIGN UP
              </MDBBtn>
            </MDBCol>
            <MDBCol md="5" xs="12" middle>
              <img className="img-fluid" src={handshake} alt="hand shake" />
            </MDBCol>
            <MDBContainer className="wave_container" fluid>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
                <path
                  fill="#fff"
                  fill-opacity="1"
                  d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
              </svg>
            </MDBContainer>
          </MDBRow>
          <MDBRow middle>
            <h3 className="backlink_merit">
              WHEN YOU GET BACKLINK FROM SOMEONE ELSE, YOU GIVE GOOGLE A PROOF
              THAT SOMEONE FOUND VALUE IN YOUR POST/BLOG AND OTHERS CAN TOO.
            </h3>
          </MDBRow>
        </MDBContainer>
      </header>
    </>
  );
}

export default HeaderBanner;

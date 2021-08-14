import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import power from "../img/Power.png";

function Others() {
  return (
    <>
      <MDBContainer fluid className="backlinkMerit wave_container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L30,154.7C60,181,120,235,180,234.7C240,235,300,181,360,133.3C420,85,480,43,540,37.3C600,32,660,64,720,101.3C780,139,840,181,900,170.7C960,160,1020,96,1080,69.3C1140,43,1200,53,1260,85.3C1320,117,1380,171,1410,197.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <MDBRow>
          <MDBCol className="backlinkMeritHeader">
            <h2>MERITS OF BACKLINKS</h2>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <img className="img-fluid" src={power} alt="Statue of Liberty" />
          </MDBCol>
          <MDBCol middle>
            <h2>You Get Domain Authority</h2>
            <p>
              Backlink from high quality website gurantees Domain Authority. You
              get feature in a lot of articles and get the authority
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Others;

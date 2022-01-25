import React from "react";
import "../styles/header.css";
import "../styles/resources.css";
import Stamp from "../components/Stamp";
import Photo from "../components/photo";
import ContactInformation from "../components/ContactInformation";

const Header = () => {
  return (
    <>
      <div className="header-content">
        <Photo></Photo>
        <div className="hidden-information-containes">
          <ContactInformation></ContactInformation>
        </div>
        <Stamp></Stamp>
      </div>
    </>
  );
};

export default Header;
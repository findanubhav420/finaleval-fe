import React from "react";
import SideNavbar from "../../components/SideNavbar";
import Header from "../../components/Header";
import ContentTypeBody from "../../components/ContentTypeBody";
import "./ContentTypePage.css";
function Entries() {
    return (
        <div className="homepage-container">
        <SideNavbar />
        <div className="right-side-container">
          <Header />
          <ContentTypeBody/>
        </div>
      </div>
    );
}   

export default Entries;
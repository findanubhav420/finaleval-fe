import React from "react";
import SideNavbar from "../../components/SideNavbar";
import Header from "../../components/Header";
import EntryBody from "../../components/EntryBody";
import { useParams } from "react-router-dom";
import "./EntriesPage.css";
function Entries() {
  const {id} = useParams();
    return (
        <div className="homepage-container">
        <SideNavbar id={id}/>
        <div className="right-side-container">
          <Header id={id}/>
          <EntryBody id={id}/>
        </div>
      </div>
    );
}   

export default Entries;
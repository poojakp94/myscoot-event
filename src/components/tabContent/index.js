import React from "react";
import "./style.css";
import AboutEvent from "../aboutEvent";
import Games from "../games";
import Poll from "../poll";
import Participants from "../participants";

function TabContent({ activeTab }) {
  return (
    <div className="content-wrapper">
      {activeTab === "1" ? (
        <AboutEvent />
      ) : activeTab === "2" ? (
        <Participants />
      ) : activeTab === "3" ? (
        <Poll />
      ) : (
        <Games />
      )}
    </div>
  );
}

export default TabContent;

import React from "react";
import "./style.css";

function Tab({ setActiveTab, activeTab}) {
 
  const handleTabClick = (event) => {
    event.preventDefault();
    setActiveTab(event.target.id);
  };
  
  return (
    <div className="tab-wrapper">
      <div id="1" className={activeTab === "1" ? "active-tab" : "tab-text"} onClick={handleTabClick}>
        ABOUT THE EVENT
      </div>
      <div id="2" className={activeTab === "2" ? "active-tab" : "tab-text"} onClick={handleTabClick}>
        PARTICIPANTS
      </div>
      <div id="3" className={activeTab === "3" ? "active-tab" : "tab-text"} onClick={handleTabClick}>
        START A POLL
      </div>
      <div id="4" className={activeTab === "4" ? "active-tab" : "tab-text"} onClick={handleTabClick}>
        EXPLORE GAMES
      </div>
    </div>
  );
}

export default Tab;

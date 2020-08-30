import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Tab from "./components/tabs";
import TabContent from "./components/tabContent";

function App() {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="app">
      <p className="header">Are you ready to start the event?</p>
      <Button text={activeTab === "1" ? "Start Now" : "I'm Ready"}></Button>
      <Tab setActiveTab={setActiveTab} activeTab={activeTab}></Tab>
      <TabContent activeTab={activeTab}></TabContent>
    </div>
  );
}

export default App;

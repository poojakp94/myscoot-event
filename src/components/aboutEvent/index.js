import React from "react";
import "./style.css";
import Guitarist from "../../img/guitarist.jpg";
import Host1 from "../../img/person6.jpg";
import Host2 from "../../img/person3.jpg";

function AboutEvent() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "50px",
      }}
    >
      <div className="about-event">
        <div className="heading-wrapper">
          <h2>Social distan-sing and play</h2>
          <p>Today 7 PM</p>
        </div>

        <h3 style={{ marginBottom: '0px'}}>About this event</h3>
        <p style={{ marginTop: '8px'}}>
          We have all played board games since years. But what happens when
          teams compete in rounds of bidding for titles and time, keep scores
          and ultimately emerge as the champions?
        </p>
        <h3>Your host</h3>
        <img src={Host1} alt="host" className="host-img" />
        <img src={Host2} alt="host" className="host-img" />
        <p>Susanne</p>
        <p>
          We have all played Dumb C since year. But what happens when teams
          compete in rounds of bidding for movies and time, keep scores and
          ultimately emerge as the champions.
        </p>
      </div>
      <img src={Guitarist} alt="gitarist" className="guitarist-img" />
    </div>
  );
}

export default AboutEvent;

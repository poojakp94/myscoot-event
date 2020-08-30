import React from "react";
import "./style.css";
import Person1 from "../../img/person1.jpg";
import Person2 from "../../img/person2.jpg";
import Person3 from "../../img/person3.jpg";
import Person4 from "../../img/person4.jpg";
import Person5 from "../../img/person5.jpg";
import Person6 from "../../img/person6.jpg";
import Person7 from "../../img/person7.jpg";
import Person8 from "../../img/person8.jpg";
import Person9 from "../../img/person9.jpg";
import Person10 from "../../img/person10.jpg";
import Person11 from "../../img/person11.jpg";

function Participants() {
  const personsOnline = [
    { name: "Mujahid (Host)", imgUrl: Person1 },
    { name: "Susanne", imgUrl: Person2 },
    { name: "Susanne", imgUrl: Person3 },
    { name: "Susanne", imgUrl: Person4 },
    { name: "Susanne", imgUrl: Person5 },
    { name: "Susanne", imgUrl: Person6 },
    { name: "Susanne", imgUrl: Person7 },
  ];

  const personsWaiting = [
    { name: "Susanne", imgUrl: Person8 },
    { name: "Susanne", imgUrl: Person9 },
    { name: "Susanne", imgUrl: Person10 },
    { name: "Susanne", imgUrl: Person11 },
  ];

  return (
    <div>
      <h3>Online</h3>
      <div className="persons-wrapper">
        {personsOnline.map((person) => (
          <div className="img-wrapper" key={person.imgUrl}>
            <img src={person.imgUrl} alt="person" width="120" />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
      <h3>Waiting to join</h3>
      <div className="persons-wrapper">
        {personsWaiting.map((person) => (
          <div className="img-wrapper" key={person.imgUrl}>
            <img src={person.imgUrl} alt="person" width="120" />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Participants;

import React, { useState } from "react";
import "./style.css";
import Button from "../button";

const Option = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: "100px",
        // border: '1px solid red'
      }}
    >
      <div
        style={{
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          background: "#fff",
          border: "1px solid #B1B4B9",
        }}
      ></div>
      <input className="options" placeholder="Type a poll option...." />
    </div>
  );
};

const Question = ({ ques, setQuestion }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          background: "#B1B4B9",
        }}
      ></div>
      <input
        className="ques"
        placeholder="Type poll question here...."
        value={ques}
        onChange={(event) => {
          event.preventDefault();
          setQuestion(event.target.value);
        }}
      />
    </div>
  );
};

function Poll({ text }) {
  const [options, addOption] = useState([1, 2]);
  const [ques, setQuestion] = useState("");
  const HandleClick = () => {
    addOption((state) => {
      if (state.length < 5) {
        let newElement = state.length + 1;
        return [...state, newElement];
      } else {
        return [...state];
      }
    });
  };

  return (
    <div
      style={{
        padding: "0 50px 20px 20px",
      }}
    >
      <Question ques={ques} setQuestion={setQuestion} />

      {options.map((option, index) => (
        <div key={index} style={{marginBottom: '30px'}}><Option  /></div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          className="add-btn"
          onClick={HandleClick}
          disabled={!(options.length < 5)}
        >
          Add another poll option
        </button>
        <Button text="Start poll"></Button>
      </div>
    </div>
  );
}

export default Poll;

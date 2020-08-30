import React from "react";

function Button({ text }) {
  return (
    <button
      style={{
        backgroundColor: "#FFA902",
        color: "#fff",
        padding: "10px 40px",
        outline: "none",
        border: "none",
        borderRadius: "50px",
        fontWeight: "600",
        fontSize: "1rem",
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
}

export default Button;

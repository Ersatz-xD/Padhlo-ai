import React from "react";
import "./generatednotes.css";

const GeneratedNotes = () => {
  return (
    <div className="main-parent">
      <div className="generated-notes">
        <p className="heading">Generated Notes</p>
        <div className="notes-box">
          <p className="notes-heading">Your Topic</p>
          <p className="notes-exp">Generated Notes will appear here..... </p>
        </div>
      </div>
    </div>
  );
};

export default GeneratedNotes;

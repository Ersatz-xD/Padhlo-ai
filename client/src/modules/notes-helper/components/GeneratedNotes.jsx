import React from "react";
import ReactMarkdown from 'react-markdown';
import "./generatednotes.css";

const GeneratedNotes = ( {explanation} ) => {
  return (
    <div className="main-parent">
      <div className="generated-notes">
        <p className="heading">Generated Notes</p>
        <div className="notes-box">
          {/* <p className="notes-heading">{topic}</p> */}
          {/* <p className="notes-exp"> {explanation} </p> */}
          <p className="notes-exp">
          <ReactMarkdown >{explanation}</ReactMarkdown>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default GeneratedNotes;

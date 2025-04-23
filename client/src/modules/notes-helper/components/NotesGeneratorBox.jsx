import React from "react";
import "./notesgeneratorbox.css";

const NotesGeneratorBox = () => {
  return (
    <div className="main-parent">
      <div className="main-box">
        <div className="topic">
          <p className="heading">Topic</p>
          <input type="text" className="input-text" />
        </div>

        <div className="rough-notes">
          <p className="heading">Your Rough Notes</p>
          <textarea
            name="rough-notes"
            id="rough-notes"
            className="input-text"
          ></textarea>
        </div>

        <button id="btn">Generate Notes</button>
      </div>
    </div>
  );
};

export default NotesGeneratorBox;

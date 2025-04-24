import React, { useState } from "react";
import "./notesgeneratorbox.css";

const NotesGeneratorBox = ({ onGenerate }) => {
  const [topic, setTopic] = useState('');
  const [roughNotes, setRoughNotes] = useState('');

  const handleClick = () => {
    if (topic.trim() && roughNotes.trim()) {
      onGenerate(topic, roughNotes);
      setTopic('');
      setRoughNotes('');

    }
  };

  return (
    <div className="main-parent">
      <div className="main-box">
        <div className="topic">
          <p className="heading">Topic</p>
          <input type="text" className="input-text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>

        <div className="rough-notes">
          <p className="heading">Your Rough Notes</p>
          <textarea
            name="rough-notes"
            id="rough-notes"
            className="input-text"
            value={roughNotes}
            onChange={(e) => setRoughNotes(e.target.value)}
          ></textarea>
        </div>

        <button id="btn" onClick={handleClick}>Generate Notes</button>
      </div>
    </div>
  );
};

export default NotesGeneratorBox;

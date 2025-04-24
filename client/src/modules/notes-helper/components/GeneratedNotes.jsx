import React, {useRef} from "react";
import ReactMarkdown from 'react-markdown';
import { marked } from "marked";
import "./generatednotes.css";

const GeneratedNotes = ( {explanation} ) => {
  const textRef = useRef(null);

  const handleCopy = async () => {
    try {
      const html = marked.parse(explanation); // convert markdown to HTML
      const blob = new Blob([html], { type: "text/html" });
      await navigator.clipboard.write([new ClipboardItem({ "text/html": blob })]);
      alert("Copied with formatting!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };


  return (
    <div className="main-parent">
      <div className="generated-notes">
        <p className="heading">Generated Notes</p>
        <div className="notes-box">
          {/* <p className="notes-heading">{topic}</p> */}
          {/* <p className="notes-exp"> {explanation} </p> */}
          <div className="notes-exp" ref={textRef}>
          <ReactMarkdown >{explanation}</ReactMarkdown>
          </div>
          
        </div>
        <button className="copy-btn" onClick={handleCopy} >Copy To Clipboard</button>
      </div>
    </div>
  );
};

export default GeneratedNotes;

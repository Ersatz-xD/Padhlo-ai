import React from "react";
import "./notespage.css";
import NotesGeneratorBox from "../modules/notes-helper/components/NotesGeneratorBox";
import GeneratedNotes from "../modules/notes-helper/components/GeneratedNotes";

const NotesPage = () => {
    return (
      <div className="parent-div">

      <div className="main-heading">
      <h1 className="text">Notes Helper</h1>
      <h6 className="text slogan">Turn Rough Notes into Perfect Study Material</h6>
      </div>

      <div className="notes-generator-box">
      <NotesGeneratorBox />
      </div>

      <div className="generated-notes-box">
        <GeneratedNotes />
      </div>

      </div>
    )
  }
  export default NotesPage
  
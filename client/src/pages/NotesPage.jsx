import React, { useState } from "react";
import "./notespage.css";
import NotesGeneratorBox from "../modules/notes-helper/components/NotesGeneratorBox";
import GeneratedNotes from "../modules/notes-helper/components/GeneratedNotes";
import { getNotesFromAI } from '../api/notesHelper'; 

const NotesPage = () => {

  const [generatedNotes, setGeneratedNotes] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleGeneratedNotes = async ( topic, roughNotes ) => {

    setLoading(true);
    const explanation = await getNotesFromAI(topic, roughNotes);

    const newNote = {topic, explanation };
    setGeneratedNotes(prev => [newNote, ...prev]);
    setLoading(false);
  };
    return (
      <div className="parent-div">

      <div className="main-heading">
      <h1 className="text">Notes Helper</h1>
      <h6 className="text slogan">Turn Rough Notes into Perfect Study Material</h6>
      </div>

      <div className="notes-generator-box">
      <NotesGeneratorBox onGenerate={handleGeneratedNotes}/>
      </div>

      {loading && (
        <div className="loader"></div>
      )}

      <div className="generated-notes-box">
        {generatedNotes.map((note, index) => (
          <GeneratedNotes key={index} topic={note.topic} explanation={note.explanation}/>

        ))}
      </div>

      </div>
    )
  }
  export default NotesPage
  
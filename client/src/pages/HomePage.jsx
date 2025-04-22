import React from "react";
import { useNavigate } from 'react-router-dom';
import "./homepage.css";
import arrowIcon from "../assets/arrow-circle-right.png";
import studyGroup from "../assets/35020245_8262271.jpg";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="main-heading">
        <h1 className="text">AI-Powered Study Assisstant</h1>
        <h4 className="text">Learn Better. Faster. Easier.</h4>

        <div className="go-to-about">
          <span className="about-btn">About Us</span>
          <button className="arrow-btn" onClick={() =>{
            const sec = document.getElementById('about-section');
            sec?.scrollIntoView({behavior: 'smooth'})
          }}>
            <img src={arrowIcon} alt="arrow icon" />
          </button>
        </div>

        <div className="lower-part">
          <div className="study-image">
            <img
              className="study-group"
              src={studyGroup}
              alt="vector-study-group"
            />
          </div>

          <div className="right-lower">
            <div className="go-to-notes">
              <h4 className="light-text">Notes Helper</h4>
              <p className="lighter-text">Your Messy Notes - Made Meaningful</p>
              <div className="go-to-div">
                <button  className="go-to-btn-notes" onClick={() => navigate('/notes-page')}>Open it</button>
              </div>
            </div>

            <div className="go-to-quiz">
              <h4 className="light-text">Quiz Generator</h4>
              <p className="lighter-text">
                From Concepts to Questions — Instantly
              </p>
              <div className="go-to-div">
                <button className="go-to-btn-quiz" onClick={() => navigate('/quiz-page')}>Open it</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-sec" id="about-section">
        <div class="about">
          <h2>About Padhlo AI</h2>
          <p>
            Padhlo AI is an educational web app designed to help students learn
            smarter. It includes two powerful tools — a{" "}
            <strong>Notes Helper</strong> that turns your rough notes into
            clean, structured study material, and a{" "}
            <strong>Quiz Generator</strong> that creates MCQs from any topic
            instantly using AI.
          </p>
        </div>

        <div class="creator">
          <h3>Made by</h3>
          <p>
            <strong>Ayaan Ahmed Khan</strong>
            <br />
            Student | Developer | Learning with AI
            <br />
            <a href="https://www.linkedin.com/in/ayaan-ahmed-khan-448600351">Let's connect</a>
          </p>
        </div>

        <div class="project-info">
          <h3>Tech Stack</h3>
          <ul>
            <li>Frontend: React</li>
            <li>Backend: Node.js + Express</li>
            <li>Database: MongoDB (optional)</li>
            <li>AI: Gemini API (for notes and quiz)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

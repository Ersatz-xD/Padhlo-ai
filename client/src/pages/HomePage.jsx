import React from "react";
import "./homepage.css";
import arrowIcon from "../assets/arrow-circle-right.png";
import studyGroup from "../assets/35020245_8262271.jpg";

const HomePage = () => {
  return (
    <div className="main-heading">
      <h1 className="text">AI-Powered Study Assisstant</h1>
      <h4 className="text">Learn Better. Faster. Easier.</h4>

      <div className="go-to-about">
        <span className="about-btn">About Us</span>
        <button className="arrow-btn">
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
            <button className="go-to-btn-notes">Open it</button>
            </div>
            
          </div>

          <div className="go-to-quiz">
            <h4 className="light-text">Quiz Generator</h4>
            <p className="lighter-text">From Concepts to Questions — Instantly</p>
            <div className="go-to-div">
            <button className="go-to-btn-quiz">Open it</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default HomePage;

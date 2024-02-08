import React from "react";
import "./Home.css";
function Home() {
  return (
    <div>
      <div className="content">
        <div className="profile">
          <h1 className="text1"> VASOYA MEET </h1>
          <h2 className="text2"> Front End Developer </h2>
          <p className="text3"> Welcome to My Profile </p>
          <div className="button">
            <button className="b1" type="button">
              About Me
            </button>
            <button className="b2" type="button">
              Contact
            </button>
          </div>
        </div>
        <div className="img"></div>
      </div>
    </div>
  );
}
export default Home;

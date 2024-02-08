import React from "react";
import "./Home.js";
import "./Skill.css";

function Skill() {
  return (
    <div id="skill" className="skill">
      <h2 className="s1"> Skill </h2>
      <div className="skill1">
        <div className="technical">
          <h3 className="s2"> Technical Skills </h3>
          {/* <img src="G:\React\project2\src\Assests\html-5.png"></img> */}
          <div className="html1">
            <p className="html2"> </p>
            <h5 className="html3">
              HTML
              <span className="span1">
                <sub>90%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="range2"></p>
            </p>
          </div>
          <div className="html1">
            <p className="css"> </p>
            <h5 className="html3">
              CSS
              <span className="span2">
                <sub>80%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="crange2"></p>
            </p>
          </div>

          <div className="html1">
            <p className="java"> </p>
            <h5 className="html3">
              JavaScript
              <span className="span3">
                <sub>70%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="jrange2"></p>
            </p>
          </div>

          <div className="html1">
            <p className="react"> </p>
            <h5 className="html3">
              React
              <span className="span4">
                <sub>60%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="rrange2"></p>
            </p>
          </div>
        </div>

        <div className="professional">
          <h3 className="s2"> Professional Skills </h3>
          <div className="team">
            <h5 className="html3">
              Teamwork
              <span className="tspan1">
                <sub>80%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="teamrange2"></p>
            </p>
          </div>

          <div className="team">
            <h5 className="html3">
              Creativity
              <span className="creatspan">
                <sub>70%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="creatirange2"></p>
            </p>
          </div>

          <div className="team">
            <h5 className="html3">
              Communication
              <span className="commuspan">
                <sub>70%</sub>
              </span>
            </h5>
            <p className="range">
              <p className="creatirange2"></p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;

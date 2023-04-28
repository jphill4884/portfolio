import React, { useState } from "react";
import "./MainMenu.css";

function MainMenu() {
  const [showBoxOne, setBoxOne] = useState(false);
  const [showBoxTwo, setBoxTwo] = useState(false);
  const [showBoxThree, setBoxThree] = useState(false);
  const [showBoxFour, setBoxFour] = useState(false);
  const [showBoxFive, setBoxFive] = useState(false);
  const [showBoxSix, setBoxSix] = useState(false);
  const [showBoxSeven, setBoxSeven] = useState(false);
  const [showBoxEight, setBoxEight] = useState(false);
  const [showBoxNine, setBoxNine] = useState(false);

  return (
    <div className="categories">
      <div className="project-row">
        <div
          onMouseEnter={() => setBoxOne(true)}
          onMouseLeave={() => setBoxOne(false)}
        >
          {!showBoxOne && (
            <img
              src={require("./img/waves.jpg")}
              alt="wave pattern in shades of gray"
              className="box-one"
              onMouseEnter={() => setBoxOne(true)}
              onMouseLeave={() => setBoxOne(false)}
            />
          )}
          {showBoxOne && <div className="box-one">Javascript</div>}
        </div>
        <div
          onMouseEnter={() => setBoxTwo(true)}
          onMouseLeave={() => setBoxTwo(false)}
        >
          {!showBoxTwo && (
            <img
              src={require("./img/cubes.jpg")}
              alt="geometric pattern in shades of gray"
              className="box-two"
              onMouseEnter={() => setBoxTwo(true)}
              onMouseLeave={() => setBoxTwo(false)}
            />
          )}
          {showBoxTwo && <div className="box-two">Google Apps Script</div>}
        </div>
        <div
          onMouseEnter={() => setBoxThree(true)}
          onMouseLeave={() => setBoxThree(false)}
        >
          {!showBoxThree && (
            <img
              src={require("./img/irregular_dots.jpg")}
              alt="dot pattern in shades of gray"
              className="box-three"
              onMouseEnter={() => setBoxThree(true)}
              onMouseLeave={() => setBoxThree(false)}
            />
          )}
          {showBoxThree && (
            <div className="box-three">
              <span className="standard-title">React</span>
            </div>
          )}
        </div>
      </div>
      <div className="project-row">
        <div
          onMouseEnter={() => setBoxFour(true)}
          onMouseLeave={() => setBoxFour(false)}
        >
          {!showBoxFour && (
            <img
              src={require("./img/floral.jpeg")}
              alt="floral pattern in shades of gray"
              className="box-three"
              onMouseEnter={() => setBoxFour(true)}
              onMouseLeave={() => setBoxFour(false)}
            />
          )}
          {showBoxFour && (
            <div className="box-three">
              <span className="standard-title">Node.js</span>
            </div>
          )}
        </div>
        <div
          onMouseEnter={() => setBoxSix(true)}
          onMouseLeave={() => setBoxSix(false)}
        >
          {!showBoxSix && (
            <img
              src={require("./img/dots.jpg")}
              alt="dot pattern in black and white"
              className="box-one"
              onMouseEnter={() => setBoxSix(true)}
              onMouseLeave={() => setBoxSix(false)}
            />
          )}
          {showBoxSix && <div className="box-one">Example Six</div>}
        </div>
        <div
          onMouseEnter={() => setBoxFive(true)}
          onMouseLeave={() => setBoxFive(false)}
        >
          {!showBoxFive && (
            <img
              src={require("./img/static.jpg")}
              alt="geometric pattern in shades of gray"
              className="box-two"
              onMouseEnter={() => setBoxFive(true)}
              onMouseLeave={() => setBoxFive(false)}
            />
          )}
          {showBoxFive && <div className="box-two">APIs</div>}
        </div>
      </div>
      <div className="project-row">
        <div
          onMouseEnter={() => setBoxSeven(true)}
          onMouseLeave={() => setBoxSeven(false)}
        >
          {!showBoxSeven && (
            <img
              src={require("./img/retroswirl.jpeg")}
              alt="swirl pattern in shades of gray"
              className="box-two"
              onMouseEnter={() => setBoxSeven(true)}
              onMouseLeave={() => setBoxSeven(false)}
            />
          )}
          {showBoxSeven && <div className="box-two">Example Seven</div>}
        </div>
        <div
          onMouseEnter={() => setBoxNine(true)}
          onMouseLeave={() => setBoxNine(false)}
        >
          {!showBoxNine && (
            <img
              src={require("./img/chevrons.jpeg")}
              alt="geometric pattern in black and white"
              className="box-three"
              onMouseEnter={() => setBoxNine(true)}
              onMouseLeave={() => setBoxNine(false)}
            />
          )}
          {showBoxNine && (
            <div className="box-three">
              <span className="box-title">Resume</span>
              <span className="box-subtitle">(click to download)</span>
            </div>
          )}
        </div>
        <div
          onMouseEnter={() => setBoxEight(true)}
          onMouseLeave={() => setBoxEight(false)}
        >
          {!showBoxEight && (
            <img
              src={require("./img/semicircles.jpg")}
              alt="geometric pattern in shades of gray"
              className="box-one"
              onMouseEnter={() => setBoxEight(true)}
              onMouseLeave={() => setBoxEight(false)}
            />
          )}
          {showBoxEight && <div className="box-one">Google App Script</div>}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;

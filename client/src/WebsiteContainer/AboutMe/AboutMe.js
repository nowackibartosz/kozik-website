import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "My name is Kinga, I come from Wrocław. I'm currently studying the field of Media Creation and working as an IT consultant. I am interested in design, art and graphic composition. I love sleeping in a tent and wandering in nature. On the other hand, I really enjoy taking a part in extreme sports, playing paintball and everything related to water. My biggest dream is to go through the ice caves in Iceland and admire the northern lights. Observing the night sky and different constellations of stars is my definition of the best evening I could think of.",
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={""} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
              <br />
              <br />
              <br />
              <br />
            </span>

            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire me
              </button>
              <a href="cv2022.pdf" download="cv2022.pdf">
                <button className="btn highlighted-btn">CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

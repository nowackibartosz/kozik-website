import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "projects.svg" },
    { label: "Current Work", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Knowledge of programs", logoSrc: "projects.svg" },
    { label: "Languages", logoSrc: "interests.svg" },
  ];

  const LangSkills = [
    { skill: "Polish", ratingPercentage: 100, lvl: "Native" },
    { skill: "English", ratingPercentage: 90, lvl: "Proficient" },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University Of Economics And Business, Wrocław"}
        subHeading={"Bachelor Of Business: Business Management"}
        fromDate={"2017"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Member of Klub Podróżników BIT"}
        subHeading={
          "Main accomplishment: Took over the position of the Coordinator of the Traveler's Days 2020. That is an Annual Travel Festival, which takes place in Wroclaw and attracts around 5,000 participants each year. General duties: External Contacts Department - Sales (establishing cooperation and taking care of the constant communication with sponsors, creating summaries for partners, fulfillment of promised benefits)"
        }
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"SWPS University Of Social Sciences And Humanities"}
        subHeading={
          "Master In Creative Technologies: Digital Communications And Media"
        }
        fromDate={"2021"}
        toDate={"current"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container px" key="work-experience">
      <div className="experience-container ">
        <ResumeHeading
          heading={"DreamGo ExclusiveTravel, Wrocław, Poland"}
          subHeading={"TRAVEL DESIGNER"}
          fromDate={"07/2020"}
          toDate={"06/2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Organized luxury vacations to exotic destinations such as Dominican
            Republic, Seychelles, Aruba.Took care of incessant relations with
            hotels and contractors from all over the world, everyday work and
            communication were performed in English.
          </span>
        </div>
      </div>
      <ResumeHeading
        heading={"OpsTalent, Wrocław, Poland"}
        subHeading={"CUSTOMER SERVICE AGENT"}
        fromDate={"08/2021"}
        toDate={"04/2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          <strong>Working on the Lasership project</strong> - it is entirely
          carried out in English in cooperation with American client. The
          project deals with delivery of parcels throughout the Eastern Coast of
          the USA.
        </span>
        <br />
        <span className="resume-description-text">
          - Advanced and smooth communication with the customer via AWS and
          Salesforce platforms.
        </span>
        <br />
        <span className="resume-description-text">
          - Managed over 50 customer calls per day
        </span>
        <br />
        <span className="resume-description-text">
          - Maintained customer satisfaction with forward-thinking strategies
          focused on addressing customer needs and resolving concerns
        </span>
        <br />
        <span className="resume-description-text">
          - Provided primary customer support to internal and external customers
        </span>
        <br />
        <br />
        <span className="resume-description-text">
          <strong>Working on the Watchguard project</strong> - it is entirely
          carried out in English in cooperation with clients from all around the
          world and different time zones. The project deals with providing
          high-end net security solutions across the network, the Cloud, and
          wireless environments.
        </span>
        <br />
        <span className="resume-description-text">
          - Position of Technical Support Representative
        </span>
        <br />
        <span className="resume-description-text">
          -Constant, live communication with the customer via Vonage platform.
        </span>
        <br />
        <span className="resume-description-text">
          - Analyzing, evaluating and establishing urgency of all customer
          incidents.
        </span>

        <br />
        <span className="resume-description-text">
          - Gathering necessary technical data to begin support, including
          detailed problem descriptions, customer network details and WatchGuard
          configuration. Creating a ticket for each case
        </span>
        <br />
        <span className="resume-description-text">
          - Translating and routing customer support requests into appropriate
          incident format and queue to the prescribed technical support team.
        </span>
        <br />
        <span className="resume-description-text">
          - Assessing customer's Support Contract status to determine support
          eligibility for hardware and configuration issues.
        </span>
      </div>
    </div>,

    /* current work */
    <div className="resume-screen-container px" key="current-work">
      <div className="experience-container ">
        <ResumeHeading
          heading={"Ziflow"}
          subHeading={"CUSTOMER SUPPORT SPECIALIST"}
          fromDate={"04/2022"}
          toDate={"Current"}
        />
        <div className="experience-description ">
          <span className="resume-description-text">
            - Constant, live communication with customers via the Intercom
            platform.
          </span>
          <br />
          <span className="resume-description-text">
            - Helping clients to: successfully manage proof creation, set single
            sign-off with teammates, perform multi-stage approvals, and work
            with templates for workflows.
          </span>
          <br />
          <span className="resume-description-text">
            - Assisting clients during various integrations with applications
            such as monday.com, Asana, Google Drive
          </span>
          <br />
          <span className="resume-description-text">
            - Providing customer support during the process of embedding
            Ziflow's features in applications using robust API solutions
          </span>
          <br />
          <span className="resume-description-text">
            - Troubleshooting files in Acrobat Pro: helping customers with
            colour discrepancies, security settings on the PDF file, embedding
            non-standard fonts, flattening/optimizing the file, and object
            overlapping.
          </span>
          <br />
          <span className="resume-description-text">
            - Helping the customer to rasterize PDF files in CMYK and RBG
            blending spaces
          </span>
          <br />
          <span className="resume-description-text">
            - Troubleshooting on the Backend using app metadata and Raw JSON
          </span>
          <br />
          <span className="resume-description-text">
            - Reporting bugs and ensuring that the problem is quickly resolved
            by the developers
          </span>
          <br />
          <span className="resume-description-text">
            - Replicating customer issues related to the proofing software
          </span>
          <br />
          <span className="resume-description-text">
            - Managing customers subscriptions, paid accounts and trials{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* SKILLS */
    <div className="resume-screen-container" key="skills">
      <div className="experience-description">
        <span className="resume-description-text">
          - Customer Data Confidentiality
        </span>
        <br />
        <span className="resume-description-text">
          - De-escalation Techniques
        </span>
        <br />
        <span className="resume-description-text">
          - Responding to Difficult Customers
        </span>
        <br />
        <span className="resume-description-text">
          - Call Volume and Quality Metrics
        </span>
        <br />
        <span className="resume-description-text">
          - Multitasking and Prioritization
        </span>
        <br />
        <span className="resume-description-text">
          - Cultural Awareness and Sensitivity
        </span>
        <br />
        <span className="resume-description-text">
          - Building Customer Trust and Loyalty
        </span>
        <br />

        <span className="resume-description-text">
          - Multi-Line Phone Systems
        </span>
        <br />
        <span className="resume-description-text">
          - Microsoft Office Suite
        </span>
        <br />
      </div>
    </div>,

    /* PROGRAM */
    <div className="resume-screen-container" key="program-skills">
      <div className="experience-description">
        <span className="resume-description-text">- Jira</span>
        <br />
        <span className="resume-description-text">- Intercom</span>
        <br />
        <span className="resume-description-text">- Hubspot</span>
        <br />
        <span className="resume-description-text">- Auth0</span>
        <br />
        <span className="resume-description-text">- Chargify</span>
        <br />
        <span className="resume-description-text">- Browserstack</span>
        <br />
        <span className="resume-description-text">- Acrobat Pro</span>
        <br />
        <span className="resume-description-text">- Support inbox</span>
        <br />
        <span className="resume-description-text">- Admin tool</span>
        <br />
        <span className="resume-description-text">- ProductBoard</span>
        <br />
        <span className="resume-description-text">- Vonage</span>
        <br />
        <span className="resume-description-text">- Salesforcee</span>
        <br />
        <span className="resume-description-text">- Confluence</span>
        <br />
      </div>
    </div>,

    /*LangSKILL*/
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {LangSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
            <br />
            <span className="resume-description-text">{skill.lvl} </span>
          </div>
        </div>
      ))}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 900;
    let w = window.innerWidth;
    if (w > 800) {
      offsetHeight = 720;
    } else {
      offsetHeight = 900;
    }

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";
import "./maincontents.css";
import backvid from "./backgvid.mp4";
import { Link } from "react-router-dom";
import ideicon from "./ideicon.svg";
import textshare from "./textshare.svg";
import realtime from "./real-time.svg";
import FeatureCard from "../FeatureCards/FeatureCard";
import uuid from "react-uuid";
import cicon from "./computer.svg";
import python from "./python.svg";
import java from "./java.svg";
import javascript from "./js-file.svg";
import save from "./floppy-disk.svg";
import canvas from "./canvas.svg";
import them from "./programming.svg"
import langimg from "./langimage.png";

function Maincontent() {
  return (
    <div className="main-bodycontent">
      <div className="vidback">
        <video src={backvid} className="vid-bg" autoPlay={true} showcontrolls="false" loop muted />
        <div className="banner-text">
          <h2>
            Code<span>Warriors</span>
          </h2>
          <p>Collab Compile share</p>
          <Link to={`/editor/${uuid()}`} className="get-startedbtn">
            Get started
          </Link>
        </div>
      </div>
      <div className="Features_heading">
        <h1 style={{color:"white"}}>
          Feat<span>ures</span>
          <hr />
        </h1>
      </div>
      <div className="feature_cards">
        <FeatureCard
          heading="In-browser IDE"
          icon={ideicon}
          content=" Start coding with your favorite language on any platform, OS, and device."
        />
        <FeatureCard
          heading="Live Chat"
          icon={textshare}
          content="Live chatting while coding is also possible, as there is an additional chat window"
        />
        <FeatureCard
          heading="Real-Time Collab"
          icon={realtime}
          content="Live collaboration is possible with the people working on a project anyone can make changes."
        />
         <FeatureCard
           heading="Code-Saving"
           icon={save}
           content="You can save the code in your device for future use." 
            />
        <FeatureCard
           heading="Drawing-Board"
           icon={canvas}
           content="Drawing board is also available so that you can easily draw your illustrations which makes understanding easy."
        />
        <FeatureCard 
         heading="Themes"
         icon={them}
         content="Two types of themes are available Dark-Mode and Light-Mode."
        />
      </div>
      <div className="lastsection">
        <div className="code__heading">
          <h1 style={{color:"white"}}>
            Supported <span>languages</span>
          </h1>
        </div>
        <div className="section">
            <img src={langimg} className="langImage"></img>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;

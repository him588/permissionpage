import React from "react";
// import img from "./images/bloom-woman-working-on-computer-and-having-phone-conversation.gif";
import logo from "./images/box-svgrepo-com.svg";
import "./succes.css";
import fb from "./images/facebook-svgrepo-com.svg";
import insta from "./images/instagram-svgrepo-com.svg";
import linked from "./images/linkedin-161-svgrepo-com.svg";
import twitter from "./images/twitter-svgrepo-com.svg";

import top from "./images/wave.svg";

function Succes({ setshowcontent, setshowhome }) {
  function handleclick() {
    setshowcontent(true);
    setshowhome(false);
    console.log("hello");
  }
  return (
    <div className="succ">
      <p className="thank">Thank you</p>
      <img className="box_logo" src={logo} alt="" />
      <h1 className="head">Thanks for supporting us</h1>
      <p className="msg">We will appreciate you efforts</p>
      <button className="home_btn" onClick={handleclick}>
        Return to Home
      </button>
      <p className="msg">
        Intrested in Zod.ai?<span className="line">Learn more</span>
      </p>
      <img src={top} alt="" className="top" />
      <div className="container">
        <div className="circle">
          <img src={twitter} alt="" className="social" />
        </div>
        <div className="circle">
          <img src={linked} alt="" className="link" />
        </div>
        <div className="circle">
          <img src={fb} alt="" className="social" />
        </div>
        <div className="circle">
          <img src={insta} alt="" className="social" />
        </div>
      </div>
      {/* <img src={bottom} alt="" className="bottom" /> */}
    </div>
    // <div className="new_box">
    //   <div className="new">
    //     <h1>THANK YOU</h1>
    //     <img src={img} className="illus" alt="" />
    //     <h2 className="heading">FOR YOUR SUPPORT</h2>
    //   </div>
    // </div>
  );
}
export default Succes;

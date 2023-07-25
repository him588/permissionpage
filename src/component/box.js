import React from "react";
import logo from "./images/microsoft.svg";
import zod from "./images/zod.svg";
import "./box.css";
import Dropdown from "./dropdown";
import data from "../data/data";

function Content({ setshowcontent }) {
  function handleclick() {
    setshowcontent(false);
  }
  return (
    <div>
      <img src={logo} className="logo" alt="micro" />
      <p className="text">Himanshukashyap@microsoft.com</p>
      <h2>Permission requested</h2>
      <p className="war">Review for your organization</p>
      <div className="sep">
        <img src={zod} alt="img" className="img" />
        <div>
          <p className="logotxt">Zod.ai</p>
          <p className="ver">Verified</p>
        </div>
      </div>
      <p className="text stat">
        This application is not published by Microsft or your organization.
      </p>
      <p className="txt">This app would like to:</p>
      {data.map((each, index) => {
        return (
          <Dropdown txt={each.txt} text={each.dummy} key={index}></Dropdown>
        );
      })}
      <p className="txtwar">
        If you acccept this app will get access to the specified resources for
        all user in your organisation no one else will be promoted to reveiw
        these permission.
      </p>
      <p className="txtware">
        Accepting these permission means that you allow this app to use your
        data as specified in their <span>Term of service</span> and{" "}
        <span>Privacy statement</span> you can change this permission at
        https://www.Microsft.com/.<span>Show details</span>
      </p>
      <div className="btn">
        <button>Cancel</button>
        <button className="accept" onClick={handleclick}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default Content;

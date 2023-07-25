import React, { useState } from "react";
import img from "./images/down-arrow-svgrepo-com.svg";
import "./dropdown.css";
function Dropdown({ txt, text }) {
  const [show, setshow] = useState(false);
  function handleshow() {
    if (show) {
      setshow(false);
    } else {
      setshow(true);
      console.log("hello");
    }
  }
  return (
    <>
      <div className="drop">
        <img src={img} alt="img" id="img" className={show ? "imgrot" : ""} />
        <label htmlFor="img" onClick={handleshow}>
          {txt}
        </label>
      </div>

      <div className={show ? "dummy dummyshow" : "dummy"}>
        <p className={show ? "innertext show" : "innertext "}>{text}</p>
      </div>
    </>
  );
}
export default Dropdown;

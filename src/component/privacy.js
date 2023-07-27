import React from "react";
import "./privacy.css";

function Privacy({ setshowhome }) {
  function handleclick() {
    setshowhome(true);
  }
  return (
    <div className="main">
      <div className="privacybox">
        <div className="newpri_box">
          <p className="privacytxt">
            Would you agree with the privacy policy ...
          </p>
          <div className="btnbox">
            <button className="can">CANCEL</button>
            <button className="agr" onClick={handleclick}>
              AGREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Privacy;

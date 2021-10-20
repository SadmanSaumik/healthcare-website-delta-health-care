import React from "react";
import "./Count.css";

const Count = () => {
  return (
    <div className="counter-wrapper">
      <div className="container">
        <div className="row g-5">
          <div className="col-md-3 counter-box-wrapper">
            <div className="counter-box">
              <h3 className="text-center">750+</h3>
              <p className="text-center">Total Bed</p>
            </div>
          </div>
          <div className="col-md-3 counter-box-wrapper">
            <div className="counter-box">
              <h3 className="text-center">120+</h3>
              <p className="text-center">Spcialist Doctors</p>
            </div>
          </div>
          <div className="col-md-3 counter-box-wrapper">
            <div className="counter-box">
              <h3 className="text-center">25+</h3>
              <p className="text-center">Ambulance</p>
            </div>
          </div>
          <div className="col-md-3 counter-box-wrapper">
            <div className="counter-box">
              <h3 className="text-center">3250+</h3>
              <p className="text-center">Happy Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;

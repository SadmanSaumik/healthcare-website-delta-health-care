import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12 col-sm-12">
            <h1>Best Healthcare Clinic For Your Health</h1>
            <p>
              Clinical excellence must be the priority for any health care
              service provider. Delta Health Care ensures the best healthcare
              service comprise of professional (clinical) service excellence
              with outstanding personal service.
            </p>
            <div className="btn btn-primary">Book Your Appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

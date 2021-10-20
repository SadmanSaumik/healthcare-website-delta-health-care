import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-wrapper">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-12 col-sm-12 why-choose-img">
            <div className="row gx-3">
              <div className="col-md-6 col-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://ithemeslab.com/tempkits/medikit/wp-content/uploads/2020/03/h1-wcu-img-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://ithemeslab.com/tempkits/medikit/wp-content/uploads/2020/03/h1-wcu-img-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="row gx-3 mt-3">
              <div className="col-md-6 col-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://ithemeslab.com/tempkits/medikit/wp-content/uploads/2020/03/h1-wcu-img-3.png"
                  alt=""
                />
              </div>
              <div className="col-md-6 col-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://ithemeslab.com/tempkits/medikit/wp-content/uploads/2020/03/h1-wcu-img-4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-sm-12">
            <h1>Why Choose Us?</h1>
            <p>
              We Provide our best service. Clinical excellence must be the
              priority for any health care service provider. Delta Health Care
              ensures the best healthcare service comprise of professional
              (clinical) service excellence with outstanding personal service.
            </p>
            <div className="btn btn-primary banner-btn">
              Book Your Appointment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

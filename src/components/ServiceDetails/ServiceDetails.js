import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        const detail = data.filter((detail) => detail.id == serviceId);
        detail.map((d) => setDetail(d));
      });
  }, []);
  console.log(detail);
  const { service, description, pic } = detail;
  return (
    <div>
      <div className="details-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 col-sm-12">
              <h3>{service}</h3>
              <p>{description}</p>
            </div>
            <div className="col-md-6 col-12 col-sm-12">
              <img className="img-fluid" src={pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

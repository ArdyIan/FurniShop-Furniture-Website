import React from "react";
import "./hero.css";
import sofa from "../../assets/sofa.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="img-sofa">
        <img src={sofa} alt="sofa" className="sofa" />
      </div>

      <div className="text-hero">
        <span className="headline-hero">We Create Your Home More Aesthetic</span>
        <span className="text1">Furniture power is a software as a service for multipurpose business management systems.</span>
        <div className="checklist">
          <div className="checklist-item">
            <span className="check-icon">
              <IoIosCheckmarkCircle />
            </span>
            <div className="test">
              <span className="check-title">Valuation Services</span>
              <div className="check-description">Sometimes features require a short description. This can be detailed description</div>
            </div>
          </div>
          <div className="checklist-item">
            <span className="check-icon">
              <IoIosCheckmarkCircle />
            </span>
            <div>
              <span className="check-title">Development of Furniture Modelss</span>
              <div className="check-description">Sometimes features require a short description. This can be detailed description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

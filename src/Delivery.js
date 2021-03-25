import React from "react";
import delivery from "./images/delivery.jpeg";
import whatsapp from "./images/whatsapp.png";
// Styles
import "./delivery.css";

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery__container">
        <div className="delivery__content">
          <div className="delivery__contact">
            <div className="delivery__contact__top">
              <h3>
                <span>960247348</span>
                <img src={whatsapp} alt="" />
              </h3>
              <h2>Pidelo en todo chiclayo</h2>
              <p>Te llevamos las zapatillas de tus sueños a cualquier lugar!</p>
            </div>
            <div className="delivery__contact__bottom">
              <img src={delivery} className="delivery" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;

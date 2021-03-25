import React from "react";

import "./map.css";
const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7924.040202277203!2d-79.85751832340938!3d-6.767402930432862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5229701ddb348df3!2sMi%20Laje%C3%B1ita!5e0!3m2!1ses-419!2spe!4v1611243424673!5m2!1ses-419!2spe"
        frameborder="0"
        style={{ border: 0, outline: "none" }}
        allowfullscreen=""
        aria-hidden={true}
        tabindex="0"
        className="my__map"
      ></iframe>
    </div>
  );
};

export default Map;

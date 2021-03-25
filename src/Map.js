import React from "react";

import "./map.css";
const Map = () => {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2245317719903!2d-79.12170918462373!3d-8.078568394183563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad3bfce742e179%3A0x565e866bbdf80e90!2sHuanchaco!5e0!3m2!1ses!2spe!4v1616689377006!5m2!1ses!2spe"
        frameborder="0"
        style={{ border: 0, outline: "none" }}
        allowfullscreen=""
        aria-hidden={true}
        tabindex="0"
        className="my__map"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;

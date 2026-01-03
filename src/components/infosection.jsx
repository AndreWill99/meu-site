import React from "react";
import "../styles/infoSection.css";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="card">
        <h3>Experiência</h3>
        <div className="icon experience"></div>
      </div>
      <div className="card">
        <h3>Formação</h3>
        <div className="icon education"></div>
      </div>
    </section>
  );
};

export default InfoSection;

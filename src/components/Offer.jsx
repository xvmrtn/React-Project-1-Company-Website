import React from "react";
import offerServices from "../data/Offer";

function Offer({ label, isNew }) {
  return (
    <section id="offer">
      <h1>Czym zajmuje się nasza firma?</h1>
      <ul className="offer-services">
      {offerServices.map((o) => {
        return o.isNew ? (
          <li className="service">
            <div className="ellipse"></div>
            <p>{o.label}</p>
          </li>
        ) : (
          <li className="service">
            <p>{o.label}</p>
          </li>
        );
      })}
      </ul>
    </section>
  );
}

export default Offer;
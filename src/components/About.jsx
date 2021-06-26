import React from "react";
import people from "../data/About";

function About() {
  return(
  <section id="about">
    <div className="about-wrapper">
      <h1>Nasi specjaliści</h1>
      <ul className="people">
        {people.map((p) => {
          return (
            <li className="person">
              <img
                className="person-img"
                src={p.img}
                alt="woman"
              />
              <div className="person-data-left">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  </section>);
}

export default About;

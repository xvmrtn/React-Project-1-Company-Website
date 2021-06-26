import React from "react";

function Banner() {
  return(
  <section className="banner">
    <div className="shh"></div>
    <div className="shadow">
      <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
      <h2>Nie wierz nam na słowo - sprawdź</h2>
      <a href="#offer">
        <button>oferta</button>
      </a>
    </div>
  </section>);
}

export default Banner;

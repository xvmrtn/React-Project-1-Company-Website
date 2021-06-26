import React from "react";

function Header() {
  return(
  <header>
    <div className="logo">nazwa firmy</div>
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#about">o nas</a>
        </li>
        <li>
          <a href="#offer">oferta</a>
        </li>
        <li>
          <a href="#" id="contact">
            kontakt
          </a>
        </li>
      </ul>
    </nav>
  </header>);
}

export default Header;

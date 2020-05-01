import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <nav>
      <ul className="nav-links">
        <Link className="footer-links" to="/about">
          <li>About</li>
        </Link>
        <Link className="footer-links" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Footer;

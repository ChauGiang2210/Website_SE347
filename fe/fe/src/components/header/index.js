import React from "react";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS của Bootstrap

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        {/* ... */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">About</Link>
          </li>
          {/* ... */}
        </ul>
        {/* ... */}
      </div>
    </nav>
  );
};

export default Header;
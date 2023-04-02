import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">Joel's Movie Site</div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

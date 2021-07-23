import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar sticky-top navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link to="/users" className="navbar-brand">
          Crud-UI
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

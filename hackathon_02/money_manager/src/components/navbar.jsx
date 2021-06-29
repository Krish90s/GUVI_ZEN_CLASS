import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light border-bottom bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mb-0" href="#">
            <i class="bi bi-currency-bitcoin fs-4"></i>
            <span className="h5">Money Manager</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

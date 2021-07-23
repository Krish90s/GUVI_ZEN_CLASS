import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion  d-md-block collapse"
      id="collapseExample"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/home/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/home/dashboard">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog" />
          <span>Components</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link
              to=""
              className="collapse-item"
              href="buttons.html"
              to="/home/buttons"
            >
              Buttons
            </Link>
            <Link
              to=""
              className="collapse-item"
              href="cards.html"
              to="/home/cards"
            >
              Cards
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#collapseUtilities"
          aria-expanded="false"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench" />
          <span>Utilities</span>
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link
              to="/home/colors"
              className="collapse-item"
              href="utilities-color.html"
            >
              Colors
            </Link>
            <Link
              to="/home/borders"
              className="collapse-item"
              href="utilities-border.html"
            >
              Borders
            </Link>
            <Link
              to="/home/animations"
              className="collapse-item"
              href="utilities-animation.html"
            >
              Animations
            </Link>
            <Link
              to="/home/others"
              className="collapse-item"
              href="utilities-other.html"
            >
              Other
            </Link>
          </div>
        </div>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Addons</div>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePages"
          aria-expanded="false"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder" />
          <span>Pages</span>
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link to="/home/login" className="collapse-item" href="login.html">
              Login
            </Link>
            <Link
              to="/home/register"
              className="collapse-item"
              href="register.html"
            >
              Register
            </Link>
            <Link
              to="/home/forgotpassword"
              className="collapse-item"
              href="forgot-password.html"
            >
              Forgot Password
            </Link>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <Link to="/home/404page" className="collapse-item" href="404.html">
              404 Page
            </Link>
            <Link
              to="/home/blankpage"
              className="collapse-item"
              href="blank.html"
            >
              Blank Page
            </Link>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <Link to="/home/charts" className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/home/tables" className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Tables</span>
        </Link>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
};

export default SideBar;

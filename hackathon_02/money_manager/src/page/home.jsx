import React, { Component } from "react";
import ExpenditureButton from "../components/expenditurebutton";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container mt-3">
        <div className="row gap-3">
          <div className="col-md-4 d-grid">
            <ExpenditureButton />
          </div>
          <div className="col-md-4 order-1">
            <div className="dropdown  d-grid">
              <button
                className="btn btn-light border dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Weekly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Monthly
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Yearly
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

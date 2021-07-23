import React, { Component } from "react";

class SaleBadge extends Component {
  state = {};
  salebadgestyle = { top: "0.5rem", right: "0.5rem" };
  render() {
    return (
      <div
        className="badge bg-dark text-white position-absolute"
        style={this.salebadgestyle}
      >
        Sale
      </div>
    );
  }
}

export default SaleBadge;

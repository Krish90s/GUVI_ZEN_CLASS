import React, { Component } from "react";

class UserListItem extends Component {
  state = {
    id: this.props.id,
    user: this.props.name,
    email: this.props.email,
    phone: this.props.phone,
  };
  render() {
    return (
      <a
        href="#"
        className="list-group-item list-group-item-action rounded-3 shadow-sm"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.state.user}</h5>
          <small className="text-muted">{this.state.email}</small>
        </div>
        <p className="mb-1">{this.state.phone}</p>
        <small className="gap-2 d-flex justify-content-end">
          <button className="btn btn-dark btn-sm">
            <i className="bi bi-pencil-square"></i>
          </button>
          <button className="btn btn-dark btn-sm mx-2">
            <i className="bi bi-trash"></i>
          </button>
        </small>
      </a>
    );
  }
}

export default UserListItem;

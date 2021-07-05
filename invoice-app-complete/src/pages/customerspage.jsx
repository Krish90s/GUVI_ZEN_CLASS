import React, { Component } from "react";
import UserListItem from "../components/userlistitem";

class CustomerPage extends Component {
  state = {
    Users: [
      {
        id: 1,
        username: "jasmine",
        email: "dhhj@gmail.com",
        phone: 7354547583,
      },
      {
        id: 2,
        username: "kaliya",
        email: "sllld@gmail.com",
        phone: 4879366655,
      },
      {
        id: 3,
        username: "james",
        email: "llig@gmail.com",
        phone: 7744558899,
      },
      {
        id: 1,
        username: "korra",
        email: "cnvbb@gmail.com",
        phone: 9988667452,
      },
      {
        id: 1,
        username: "aang",
        email: "rweew@gmail.com",
        phone: 1124563466,
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="col h2">Users List</div>
          <div className="col d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-dark me-md-2">New</button>
          </div>
        </div>
        {/* render list */}

        <div className="list-group gap-3">
          {this.state.Users.map((user) => (
            <UserListItem
              key={user.id}
              name={user.username}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CustomerPage;

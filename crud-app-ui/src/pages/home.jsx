import React, { Component } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }
  /* READ */

  handleDelete = async (user) => {
    const originalusers = this.state.users;
    const users = originalusers.filter((s) => s.id !== user.id);
    this.setState({ users });
    try {
      await deleteUser(user.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("this student has already been deleted");
      this.setState({ users: originalusers });
    }
  };

  render() {
    return (
      <div>
        <div className="container-md">
          <h1>User List</h1>
          <Link to="/users/new" className="btn btn-primary my-3">
            Create User
          </Link>

          <table className="table table-hover border">
            <thead className="table-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">User Name</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>
                      <Link
                        to={`/users/${user.id}`}
                        className="btn btn-primary btn-sm "
                      >
                        View
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(user)}
                        className="btn btn-danger btn-sm "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;

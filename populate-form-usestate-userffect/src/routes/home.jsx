import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Home = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <div className="container">
      <div className="container group-item text-light bg-dark d-flex justify-content-between py-2">
        <h4 className="my-auto">Users</h4>
        <Link className="btn btn-primary btn-sm my-auto" to="/users/new">
          Add User
        </Link>
      </div>

      <ul className="list-group mt-2">
        {users.length > 0 ? (
          <>
            {users.map((user) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={user.id}
              >
                <h6 className="my-auto">{user.name}</h6>
                <div>
                  <Link
                    className="btn btn-dark btn-sm my-auto"
                    to={`/users/${user.id}`}
                  >
                    <i className="bi bi-pencil-square" />
                  </Link>
                  <button
                    className="btn btn-danger btn-sm ms-2 my-auto"
                    onClick={() => removeUser(user.id)}
                    type="button"
                  >
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </li>
            ))}
          </>
        ) : (
          <h4 className="text-center">No User</h4>
        )}
      </ul>
    </div>
  );
};

export default Home;

import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-100">
      <form className="row g-3 mt-5" onSubmit={onSubmit}>
        <div className="col-md-2">
          <label className="form-label" htmlFor="user">
            <h6>Name:</h6>
          </label>
        </div>
        <div className="col-md-8">
          <input
            className="form-control"
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={onChange}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;

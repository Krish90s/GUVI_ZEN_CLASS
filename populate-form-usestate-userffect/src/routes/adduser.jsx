import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const [name, setName] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      id: uuidv4(),
      name,
    };
    addUser(newUser);
    history.push("/");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="w-100">
      <form className="row g-3 mt-5" onSubmit={onSubmit}>
        <div className="col-md-2">
          <label className="form-label" htmlFor="user">
            <h6>Name :</h6>
          </label>
        </div>
        <div className="col-md-8">
          <input
            className="form-control"
            value={name}
            onChange={onChange}
            type="text"
            id="user"
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;

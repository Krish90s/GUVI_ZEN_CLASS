import React from "react";
import Joi from "joi-browser";
import Form from "../components/form";
import { saveUser, getUser } from "../services/userService";
class UserForm extends Form {
  constructor() {
    super();
    this.state = {
      data: { name: "" },
      errors: {},
    };
  }

  schema = {
    id: Joi.number(),
    name: Joi.string().required().label("Student Name"),
    username: Joi.string(),
    email: Joi.string(),
    address: {
      street: Joi.string(),
      suite: Joi.string(),
      city: Joi.string(),
      zipcode: Joi.string(),
      geo: {
        lat: Joi.string(),
        lng: Joi.string(),
      },
    },
    phone: Joi.string(),
    website: Joi.string(),
    company: {
      name: Joi.string(),
      catchPhrase: Joi.string(),
      bs: Joi.string(),
    },
  };

  async componentDidMount() {
    try {
      const userId = this.props.match.params.id;
      if (userId === "new") return;
      const { data: user } = await getUser(userId);
      this.setState({ data: this.mapToViewModel(user) });
    } catch (ex) {
      if (ex.respose && ex.respose.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  mapToViewModel(user) {
    return {
      name: user.name,
    };
  }

  doSubmit = async () => {
    await saveUser(this.state.data);
    this.props.history.push("/users");
  };
  render() {
    return (
      <div className="container">
        <h1>User Form</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Profile Name")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default UserForm;

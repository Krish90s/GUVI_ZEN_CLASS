import React, { Component } from "react";
import { getUser } from "../services/userService";
import { getPosts } from "./../services/postService";
import { Link } from "react-router-dom";
import PostCards from "../components/postcards";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      posts: [],
    };
  }

  async componentDidMount() {
    const userId = this.props.match.params.id;
    const { data: user } = await getUser(userId);
    this.setState({ user });

    const { data: posts } = await getPosts();
    this.setState({ posts });
    console.log(this.state.posts);
  }

  render() {
    return (
      <div className="container">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{this.state.user.name}</h1>
            <p className="col-md-8 fs-4">{this.state.user.email}</p>
            <Link
              to={`/users/${this.state.user.id}/edit`}
              className="btn btn-primary btn-sm"
            >
              Change Profile Name
            </Link>
          </div>
        </div>
        <h1>User Posts</h1>
        {this.state.posts.map((p) => (
          <PostCards key={p.id} title={p.title} body={p.body} />
        ))}
      </div>
    );
  }
}

export default UserProfile;

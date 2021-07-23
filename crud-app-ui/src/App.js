import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Home from "./pages/home";
import UserProfile from "./pages/profile";
import NavBar from "./components/navbar";
import UserForm from "./pages/userform";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/users/new" component={UserForm} />
          <Route path="/users/:id/edit" component={UserForm} />
          <Route path="/users/:id" component={UserProfile} />
          <Route path="/users" component={Home} />
          <Redirect from="/" exact to="/users" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;

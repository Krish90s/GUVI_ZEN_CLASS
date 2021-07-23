import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ForgotPassword from "./pages/forgotpassword";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/register-page" component={RegisterPage} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

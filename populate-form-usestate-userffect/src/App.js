import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./routes/home";
import AddUser from "./routes/adduser";
import EditUser from "./routes/edituser";
import NavBar from "./component/navbar";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <GlobalProvider>
          <Switch>
            <Route path="/users/new" component={AddUser} />
            <Route path="/users/:id" component={EditUser} />
            <Route path="/users" component={Home} />
            <Redirect from="/" exact to="/users" />
          </Switch>
        </GlobalProvider>
      </main>
    </React.Fragment>
  );
}

export default App;

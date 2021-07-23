import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashBoard from "./dashboard";
import SideBar from "./../components/sidebar";
import TopBar from "./../components/topbar";
import Footer from "./../components/footer";
import ButtonsPage from "./buttons";
import CardsPage from "./cards";
import Colors from "./colors";
import Borders from "./borders";
import AnimationsPage from "./animations";
import OtherPage from "./other";
import LoginPage from "./login";
import RegisterPage from "./register";
import ForgotPassword from "./forgotpassword";
import NotFound from "./notfound";
import BlankPage from "./blankpage";
import ChartsPage from "./charts";
import TablePage from "./tables";
const Home = () => {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div class="container-fluid">
            <Switch>
              <Route path="/home/tables" component={TablePage} />
              <Route path="/home/charts" component={ChartsPage} />
              <Route path="/home/blankpage" component={BlankPage} />
              <Route path="/home/blankpage" component={NotFound} />
              <Route path="/home/404page" component={NotFound} />
              <Route path="/home/forgotpassword" component={ForgotPassword} />
              <Route path="/home/register" component={RegisterPage} />
              <Route path="/home/login" component={LoginPage} />
              <Route path="/home/others" component={OtherPage} />
              <Route path="/home/borders" component={Borders} />
              <Route path="/home/animations" component={AnimationsPage} />
              <Route path="/home/borders" component={Borders} />
              <Route path="/home/colors" component={Colors} />
              <Route path="/home/cards" component={CardsPage} />
              <Route path="/home/buttons" component={ButtonsPage} />
              <Route path="/home/dashboard" component={DashBoard} />
              <Redirect from="/home/" exact to="/home/dashboard" />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

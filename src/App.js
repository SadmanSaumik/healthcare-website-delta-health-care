import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Authprovider from "./Context/Authprovider";
import PrivateRoute from "./Private/PrivateRoute";
import Appointment from "./components/Appointment/Appointment";
import Register from "./components/Register/Register";
import TeleHelp from "./components/TeleHelp/TeleHelp";

function App() {
  return (
    <div>
      <Authprovider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/details/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/telehelp">
              <TeleHelp></TeleHelp>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;

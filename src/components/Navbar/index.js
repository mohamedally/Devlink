import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import ReactDOM from "react-dom";
import React from "react";
import UserProfile from "../../containers/UserProfile";
import Wall from "../../containers/Wall";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/profile">My Profile</Link>
          <Link to="/wall">Wall</Link>
        </nav>
        {/* <Switch>
          <Route path="/profile" component={UserProfile} />
          <Route path="/wall" component={Wall} />
        </Switch> */}
      </div>
);}}

export default Navbar;

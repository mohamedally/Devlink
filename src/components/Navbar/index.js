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
          <div>
            <Link to="/profile">My Profile</Link>
          </div>
          <div>
            <Link to="/wall">Wall</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

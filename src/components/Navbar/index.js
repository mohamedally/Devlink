import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import ReactDOM from "react-dom";
import React from "react";
import MyUserProfile from "../../containers/MyUserProfile";
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
          <div>
            <Link to="/">Logout</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

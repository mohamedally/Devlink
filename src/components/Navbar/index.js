import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";

const Navbar = () =>
  ReactDOM.render(
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/profile">My Profile</Link>
          <Link to="/wall">Wall</Link>
        </nav>
        <Switch>
          <Route path="/profile" component={userProfile} />
          <Route path="/wall" component={Wall} />
        </Switch>
      </div>
    </BrowserRouter>
  );

export default Navbar;

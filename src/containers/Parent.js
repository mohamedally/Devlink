import React from "react";
import { render } from "react-dom";
import { StateProvider } from "react-state-provider";
import SignUp from "./SignUp";
import MyUserProfile from "./MyUserProfile";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.newUsersState = StateProvider.createState("newUsers", {
      name: "",
      email: "",
      github: "",
      zipcode: "",
      password: "",
      skills: "",
      bio: "",

      newUsers: [],

      skillOptions: ["Programming", "Development", "Design", "Testing"]
    });
  }

  render() {
    return (
      <div>
        <SignUp />
        <MyUserProfile />
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../../Styles/common.scss";
import Feed from "./Feed";
import Nav from "../../../Components/Nav/Nav";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <Feed />
      </div>
    );
  }
}

export default Main;

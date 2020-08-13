import React, { Component } from "react";
import Nav from "../../../Components/Nav/Nav";
import Feed from "./Feed";
import "../../../Styles/common.scss";

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

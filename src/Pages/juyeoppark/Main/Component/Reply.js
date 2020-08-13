import React, { Component } from "react";

export default class Reply extends Component {
  render() {
    return (
      <>
        <div className="comment_add">
          <span className="addTextId">{this.props.userId}</span>
          <div className="addTextComment">{this.props.text}</div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";

export default class StoryList extends Component {
  render() {
    return (
      <>
        <div className="story_list_item">
          <div className="story_img">
            <img alt="story img" src={this.props.StoryListImg} />
          </div>
          <div className="stoty_comment">
            <span className="story_comment_text">
              {this.props.StoryListName}}
            </span>{" "}
            <br />
            <span className="story_time"> {this.props.StoryListTime}</span>
          </div>
        </div>
      </>
    );
  }
}

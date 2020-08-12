import React, { Component } from "react";
import Story from "./Story";
import "./Feed.scss";

class Feed extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      text: "",
      newText: [],
      userId: "juyeoppark",
    };
  }

  textValue = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  addText = () => {
    const { userId, text, newText } = this.state;
    this.setState({
      newText: newText.concat({ userId, text }),
      text: "",
    });
  };

  enterText = (e) => {
    if (e.key === "Enter") {
      this.addText();
    }
  };

  render() {
    return (
      <div className="Feed">
        <main id="main">
          <div className="main_feeds">
            <div className="feeds_article">
              <div className="article_header">
                <img
                  alt="wecode"
                  src="https://avatars1.githubusercontent.com/u/52394741?s=200&v=4"
                />
                <div className="article_header-text">
                  <span className="header_text-comment">wecode_bootcamp</span>
                  <span>WeCode - 위코드</span>
                </div>
                <div className="article_header-rigth">
                  <img
                    alt="more image"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  />
                </div>
              </div>
              <img
                className="feeds_image"
                alt="feeds image"
                src="https://www.powerreviews.com/wp-content/uploads/2019/04/instagram-sizes.png"
              />
              <div className="main_like">
                <div className="feeds_icon">
                  <img
                    className="feeds_item"
                    alt="heart"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  />
                  <img
                    className="feeds_item"
                    alt="comment"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                  />
                  <img
                    className="feeds_item"
                    alt="share"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                  />
                </div>
                <div className="feeds_icon-right">
                  <img
                    alt="save"
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                  />
                </div>
              </div>
              <div className="feeds_like-comment">
                <img alt="profile image" src="images/juyeoppark/jyp1.jpeg" />
                <span>juyeoppark_ju님 외 4명이 좋아합니다</span>
              </div>
              <div className="feeds_text">
                <span>wecode_bootcamp</span>
                <p>
                  "Lampang, Thailand. We’re dreaming of the floating pagodas of
                  Wat Chaloem Phra Kiat Phrachomklao Rachanusorn temple, sitting
                  upon this remote mountain top. Despite looking like it was
                  built centuries ago, construction started in 2004 and it
                  officially opened in 2015.⁣"
                </p>
                <button className="comment_more">더보기</button>
              </div>
              {this.state.newText.map((e, idx) => {
                if (e.text === "") {
                  return;
                } else {
                  return (
                    <div key={idx} className="comment_add">
                      <span className="addTextId">{e.userId}</span>
                      <div className="addTextComment">{e.text}</div>
                    </div>
                  );
                }
              })}
              <span className="Time_comment">54분전</span>
              <form className="feeds_comment">
                <input
                  type="text"
                  className="comment_text"
                  placeholder="댓글달기..."
                  value={this.state.text}
                  onChange={this.textValue}
                  onKeyPress={this.enterText}
                />
                <button
                  onClick={this.addText}
                  className="submit submit_btn"
                  disabled={this.state.text.length ? false : true}
                >
                  <span className="submit_text" onClick={this.add}>
                    게시
                  </span>
                </button>
              </form>
            </div>
          </div>
          <Story />
        </main>
      </div>
    );
  }
}

export default Feed;

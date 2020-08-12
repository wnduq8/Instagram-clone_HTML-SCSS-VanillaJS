import React, { Component } from "react";
import "./Story.scss";

class Story extends Component {
  render() {
    return (
      <div className="Story">
        <div className="main_right">
          <div className="main_right-article">
            <div className="main_right-header">
              <img
                className="right_header-img"
                alt="wecode"
                src="https://avatars1.githubusercontent.com/u/52394741?s=200&v=4"
              />
              <div className="right_header-imguser">
                <span className="imguser_name">wecode_bootcamp</span>
                <div className="imguser_bottom">
                  <span className="imguser_bottom-subcoment">WeCode</span>
                  <span>위코드</span>
                </div>
              </div>
            </div>
            <div className="main_right-main">
              <div className="right_main-top">
                <div className="rigth_main-top-story">스토리</div>
                <div className="rigth_main-top-all">모두보기</div>
              </div>
              <div className="right_main-story">
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
                <div className="story_list-item">
                  <div className="story_img">
                    <img alt="story img" src="images/juyeoppark/jyp.jpg" />
                  </div>
                  <div className="stoty_comment">
                    <span className="story_comment-text">alexishyuni</span>{" "}
                    <br />
                    <span className="story_time">2시간 전</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_rigth-footer">
              <p className="right_footer-coment">
                소개・도움말・홍보센터・API・채용
                정보・개인정보처리방침・약관・위치・인기 계정・해시태크・언어
              </p>
              <p className="right_footer-from">
                © 2020 INSTAGRAM FROM FACEBOOK
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;

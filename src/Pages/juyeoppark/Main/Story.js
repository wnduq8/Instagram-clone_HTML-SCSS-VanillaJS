import React, { Component } from "react";
import StoryList from "./Component/StoryList";
import "./Story.scss";

class Story extends Component {
  constructor() {
    super();
    this.state = {
      StoryListItem: [
        {
          StoryListImg: "images/juyeoppark/jyp.jpg",
          StoryListName: "alexishyuni",
          StoryListTime: "2시간 전",
        },
        {
          StoryListImg: "images/juyeoppark/jyp.jpg",
          StoryListName: "alexishyuni",
          StoryListTime: "2시간 전",
        },
        {
          StoryListImg: "images/juyeoppark/jyp.jpg",
          StoryListName: "alexishyuni",
          StoryListTime: "2시간 전",
        },
        {
          StoryListImg: "images/juyeoppark/jyp.jpg",
          StoryListName: "alexishyuni",
          StoryListTime: "2시간 전",
        },
        {
          StoryListImg: "images/juyeoppark/jyp.jpg",
          StoryListName: "alexishyuni",
          StoryListTime: "2시간 전",
        },
        {
          StoryListImg: "images/juyeoppark/jyp.jpg",
          StoryListName: "alexishyuni",
          StoryListTime: "2시간 전",
        },
      ],
    };
  }

  render() {
    return (
      <div className="Story">
        <div className="main_right">
          <div className="main_right_article">
            <div className="main_right_header">
              <img
                className="right_header_img"
                alt="wecode"
                src="https://avatars1.githubusercontent.com/u/52394741?s=200&v=4"
              />
              <div className="right_header_imguser">
                <span className="imguser_name">wecode_bootcamp</span>
                <div className="imguser_bottom">
                  <span className="imguser_bottom_subcoment">WeCode</span>
                  <span>위코드</span>
                </div>
              </div>
            </div>
            <div className="main_right_main">
              <div className="right_main_top">
                <div className="rigth_main_top_story">스토리</div>
                <div className="rigth_main_top_all">모두보기</div>
              </div>
              <div className="right_main_story">
                {this.state.StoryListItem.map(
                  ({ StoryListImg, StoryListName, StoryListTime }, idx) => {
                    return (
                      <StoryList
                        key={idx}
                        StoryListImg={StoryListImg}
                        StoryListName={StoryListName}
                        StoryListTime={StoryListTime}
                      />
                    );
                  }
                )}
              </div>
            </div>
            <div className="main_rigth_footer">
              <p className="right_footer_coment">
                소개・도움말・홍보센터・API・채용
                정보・개인정보처리방침・약관・위치・인기 계정・해시태크・언어
              </p>
              <p className="right_footer_from">
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

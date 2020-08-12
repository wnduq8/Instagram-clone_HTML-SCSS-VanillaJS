import React, { Component } from "react";
import "../../../Styles/common.scss";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      idValue: "",
      pwValue: "",
    };
  }

  inputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // 버튼 클릭시 main 페이지로 이동
  goToMain = () => {
    this.props.history.push("/juyeipparkMain");
  };

  // 버튼 클릭시 server로 데이터 송출
  // handleClick = () => {
  //   fetch("http://10.58.3.51:8000/accounts/login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       phone_number: this.state.idValue,
  //       password: this.state.pwValue,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log(res));
  // };

  render() {
    return (
      <div className="Login">
        <main id="login_page">
          <header className="login_header">
            <img
              className="instagram_img"
              alt="Instagram textimage"
              src="images/juyeoppark/logo_text.png"
            />
          </header>
          <section id="login_section">
            <div className="login_input">
              <form className="login_content">
                <input
                  className="login_input-id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  name="idValue"
                  value={this.state.idValue}
                  onChange={this.inputValue}
                  onKeyPress={this.btnActive}
                />
                <input
                  className="login_input-pw"
                  type="password"
                  placeholder="비밀번호"
                  name="pwValue"
                  value={this.state.pwValue}
                  onChange={this.inputValue}
                  onKeyPress={this.btnActive}
                />
              </form>
              <button
                type="submit"
                className="login_btn"
                onClick={this.goToMain}
                // onClick={this.handleClick}
                disabled={
                  this.state.idValue.length !== 0 &&
                  this.state.pwValue.length !== 0
                    ? false
                    : true
                }
              >
                로그인
              </button>
            </div>
            <div id="login_bottom">
              <div className="password_link">
                <a href="#">비밀번호를 잊으셨나요?</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Login;

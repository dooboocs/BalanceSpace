import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [collapse, setCollapse] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <header className={`header ${collapse ? "collapse" : "expand"}`}>
        <div className="gnb">
          <img
            className="logo"
            src={require("../../static/logo.png")}
            alt="Balance Space"
          />
          <nav className="nav">
            <ul>
              <li>
                비상주 사무실
                <img
                  src={require("../../static/bottom_chevron.png")}
                  style={{ marginLeft: 10 }}
                />
              </li>
              <li>위치 안내</li>
            </ul>
            <button>빠른 상담하기</button>
          </nav>
          <button onClick={toggleCollapse} className="menu-toggle">
            <div className="toggle-icon">
              <span />
              <span />
            </div>
          </button>
        </div>
        <nav className="mobile_nav">
          <ul>
            <li>제공 서비스</li>
            <li>베네핏 서비스</li>
            <li>비용 안내</li>
            <li>이용 방법</li>
            <li>결합 서비스</li>
          </ul>
          <ul>
            <li>
              <img src={require("../../static/location.png")} />
              위치 안내
            </li>
          </ul>
          <ul>
            <li>
              <img src={require("../../static/messages.png")} />
              빠른 상담하기
            </li>
          </ul>
        </nav>
      </header>
      <div className={`overlay ${collapse ? "" : "visible"}`} />
    </>
  );
};

export default Header;

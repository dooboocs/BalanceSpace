import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const [dropdown, setDropdown] = useState(true);

  const toggleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <>
      <header className={`header ${collapse ? "collapse" : "expand"}`}>
        <div className="gnb">
          <Link to="/">
            <img
              className="logo"
              src={require("../../static/logo.png")}
              alt="Balance Space"
            />
          </Link>
          <nav className="nav">
            <ul>
              <li className="dropdown">
                <Link to="/">
                  비상주 사무실
                  <img
                    src={require("../../static/bottom_chevron.png")}
                    style={{ marginLeft: 10 }}
                  />
                </Link>
              </li>
              <li>
                <Link to="/location">위치 안내</Link>
              </li>
            </ul>
            <Link to="/consult" className="filled">
              빠른 상담하기
            </Link>
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

import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import MobileHeader from "../MobileHeader/MobileHeader";
import "./Header.scss";
import { ReactComponent as Logo } from "../../../static/icons/Logo.svg";

const Header = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return isMobile ? (
    <MobileHeader />
  ) : (
    <header className="header">
      <div className="gnb">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav">
          <ul>
            <li className="dropdown">
              <Link to="/">
                비상주 사무실
                <img
                  src={require("../../../static/bottom_chevron.png")}
                  style={{ marginLeft: 10 }}
                />
              </Link>
              <div className="dropdown-list">
                <div className="space" />
                <ul>
                  <a href="#section5">제공 서비스</a>
                  <a href="#benefit">베네핏 서비스</a>
                  <a href="#section8">비용 안내</a>
                  <a href="#section9">이용 방법</a>
                  <a href="#section11">결합 서비스</a>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/location">위치 안내</Link>
            </li>
          </ul>
          <Link to="/consult" className="filled">
            빠른 상담하기
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <img
            src={require("../../../static/logo@2x.png")}
            className="footer-logo"
          />
        </div>
        <div>
          <span>서비스 이용약관</span>
          <span>개인정보처리방침</span>
        </div>
        <div>
          <span>고객센터 1644-8681</span>
          <span>오전 9시 - 오후 7시 (주말, 공휴일 제외)</span>
          <span style={{ marginTop: 20 }}>카카오채널 @balance-space</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

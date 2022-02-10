import React from "react";
import LinkCardA from "../../components/card/LinkCardA";
import LinkCardB from "../../components/card/LinkCardB";
import "./Section11.scss";

const Section11 = () => {
  return (
    <section className="section" id="section11">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <img
              src={require("../../static/link.png")}
              className="section-header-icon"
            />
            결합 서비스
          </div>
          <div className="section-header-title">
            세무서비스부터 법인설립까지
            <br />
            모일수록 커지는 혜택
          </div>
          <div className="section-header-sub">
            결합 서비스로 편리함과 혜택 모두 누리세요.
          </div>
        </div>

        <div className="section-content">
          <LinkCardA />
          <LinkCardB />
        </div>
      </div>
    </section>
  );
};

export default Section11;

import React from "react";
import "./LinkCard.scss";

const LinkCardB = () => {
  return (
    <div className="link-card" id="type-b">
      <img src={require("../../static/popup-2@2x.png")} />
      <div className="title" style={{ color: "#80B8D0" }}>
        <strong style={{ color: "#2DBCFF" }}>결합 B형.</strong>
        <p>
          법인설립 후 세무서비스를 이용할 경우,
          <br />
          법인설립 수수료를 100% D/C 해드려요
        </p>
      </div>

      <div className="sub">
        <strong className="sub-title" style={{ color: "#2DBCFF" }}>
          비상주 사무실
        </strong>
        <div className="amount">
          <strong>20,000원</strong> / 월<div className="tag">33% 할인</div>
        </div>
        <div className="discount">30,000원 / 월</div>
      </div>

      <div className="bottom-tag" style={{ background: "#4DC8FF" }}>
        연 649,300원 혜택
      </div>
    </div>
  );
};

export default LinkCardB;

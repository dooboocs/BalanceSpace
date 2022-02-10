import React from "react";
import "./LinkCard.scss";

const LinkCardA = () => {
  return (
    <div className="link-card">
      <img src={require("../../static/popup-1@2x.png")} />
      <div className="title">
        <strong>결합 A형.</strong>
        <p>
          세무서비스를 함께 이용할 경우,
          <br />
          비상주 사무실을 D/C 해드려요
        </p>
      </div>

      <div className="sub">
        <strong className="sub-title">비상주 사무실</strong>
        <div className="amount">
          <strong>20,000원</strong> / 월<div className="tag">33% 할인</div>
        </div>
        <div className="discount">30,000원 / 월</div>
      </div>

      <div className="bottom-tag">연 120,000원 혜택</div>
    </div>
  );
};

export default LinkCardA;

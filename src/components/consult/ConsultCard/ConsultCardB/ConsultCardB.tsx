import React from "react";
import "../ConsultCard.scss";
import "./ConsultCardB.scss";

interface ConsultCardBProps {
  onClose?: any;
}

const ConsultCardB = ({ onClose }: ConsultCardBProps) => {
  return (
    <div className="consult-card" id="type-b">
      <button className="close-button" onClick={onClose}>
        <img src={require("../../../../static/close-button.png")} />
      </button>
      <img
        src={require("../../../../static/popup-2@2x.png")}
        className="card-image"
      />
      <div className="card-main">
        <div className="card-title">결합 B형.</div>
        <div className="card-desc">
          법인설립 후 세무서비스를 이용할 경우,
          <br />
          법인설립 수수료를 100% D/C 해드려요
        </div>
      </div>
      <div className="card-sub-wrapper">
        <div className="card-sub">
          <small>비상주 사무실</small>
          <div className="row">
            <p>
              <strong>20,000원</strong> / 월
            </p>
            <span>33% 할인</span>
          </div>
          <label>
            <span>30,000</span>원 / 월
          </label>
        </div>
        <div className="card-sub">
          <small>법인설립</small>
          <div className="row">
            <p>
              <strong>0원</strong>
            </p>
            <span>100% 할인</span>
          </div>
          <label>
            <span>639,300</span>원
          </label>
        </div>
      </div>
      <div className="card-bottom">연 649,300원 혜택</div>
    </div>
  );
};

export default ConsultCardB;

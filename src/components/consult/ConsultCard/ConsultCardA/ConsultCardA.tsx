import React from "react";
import "../ConsultCard.scss";
import "./ConsultCardA.scss";

interface ConsultCardAProps {
  onClose?: any;
}

const ConsultCardA = ({ onClose }: ConsultCardAProps) => {
  return (
    <div className="consult-card" id="type-a">
      <div>
        <button className="close-button" onClick={onClose}>
          <img src={require("../../../../static/close-button.png")} />
        </button>
        <img
          src={require("../../../../static/popup-1@2x.png")}
          className="card-image"
        />
        <div className="card-main">
          <div className="card-title">결합 A형.</div>
          <div className="card-desc">
            세무서비스를 함께 이용할 경우, 비상주 사무실을 D/C 해드려요
          </div>
        </div>
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
      </div>

      <div className="card-bottom">연 120,000원 혜택</div>
    </div>
  );
};

export default ConsultCardA;

import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Consult = () => {
  const [popup1, setPopup1] = React.useState(false);
  const [popup2, setPopup2] = React.useState(false);

  return (
    <div className="consult-1">
      <Link className="close" to="/">
        <img src={require("../../static/close-button.png")} />
      </Link>
      <h1 className="title">원하시는 상담 분야를 선택해주세요</h1>
      <ul>
        <li>
          <p>비상주 사무실</p>
          <span>최저가</span>
        </li>
        <li>
          <p>
            결합 A형 <label>(비상주 사무실 + 세무서비스)</label>
          </p>
          <span>연 12만원 혜택</span>
          <button onClick={() => setPopup1(true)}>자세히 알아보기</button>
        </li>
        <li>
          <p>
            결합 B형 <label>(비상주 사무실 + 세무서비스 + 무료법인설립)</label>
          </p>
          <span>연 64만원 혜택</span>
          <button onClick={() => setPopup2(true)}>자세히 알아보기</button>
        </li>
      </ul>

      <div className={`popup ${popup1 ? "visible" : ""}`} id="popup-1">
        <button onClick={() => setPopup1(false)} className="close-button">
          <img src={require("../../static/close-button.png")} />
        </button>
        <img src={require("../../static/popup-1.png")} />
        <div className="popup-content">
          <div className="popup-text">
            <strong>결합 A형</strong>
            <p>
              세무서비스를 함께 이용할 경우,
              <br />
              비상주 사무실을 D/C 해드려요
            </p>
          </div>
          <div className="popup-subtext">
            <small>비상주 사무실</small>
            <div>
              <p>
                <strong>20,000원</strong>
                <small>/ 월</small>
              </p>
              <span>33% 할일</span>
            </div>
            <label>30,000 / 월</label>
          </div>
        </div>
        <div className="popup-bottom">연 120,000원 혜택</div>
      </div>

      <div className={`overlay ${popup1 || popup2 ? "show" : ""}`} />
    </div>
  );
};

export default Consult;

import React from "react";

interface Props {
  visible: boolean;
  onClose: any;
}

const ConsultPopup = ({ visible, onClose }: Props) => {
  return (
    <div className={`consult-popup ${visible ? "visible" : ""}`}>
      <div className="card">
        <button className="close" onClick={onClose}>
          <img src={require("../../../static/close-button.png")} />
        </button>
        <h1 className="title">상담신청</h1>
        <form className="input-wrapper">
          <input type="text" placeholder="성함" />
          <input type="text" placeholder="휴대폰 번호" />
          <input type="text" placeholder="업종" />
          <textarea placeholder="문의사항 (선택)" rows={4} />
          <div className="check-input">
            <input type="checkbox" />
            <label>(필수) 개인정보취급방침에 동의합니다</label>
          </div>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ConsultPopup;

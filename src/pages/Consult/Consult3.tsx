import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Consult3 = () => {
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate("/consult4");
  };

  return (
    <div className="consult" id="consult3">
      <Link to="/" className="close">
        <img src={require("../../static/close-button.png")} />
      </Link>
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
        <input type="submit" onClick={onSubmit} />
      </form>
    </div>
  );
};

export default Consult3;

import React from "react";
import { Link } from "react-router-dom";

const Consult4 = () => {
  return (
    <div className="consult" id="consult4">
      <h1>
        감사합니다.
        <br />
        문의가 완료되었습니다.
      </h1>
      <p>오피스 매니저가 신속히 연락드리도록 하곘습니다.</p>
      <div className="box">상담 가능시간 : 평일 09시 ~ 19시</div>
      <Link to="/" className="go-main">
        메인으로
      </Link>
    </div>
  );
};

export default Consult4;

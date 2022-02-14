import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "../../base";
import "./RequestDialog.scss";

const ReqeustDialog = ({ visible, onClose }: any) => {
  const [next, setNext] = useState<boolean>(false);

  const onSubmit = () => {
    setNext(true);
  };

  return (
    <Dialog visible={visible}>
      <div className="dialog-inner">
        <div
          className="request-card"
          style={{
            paddingTop: next ? 34 : 60,
            justifyContent: next ? "center" : "flex-start",
          }}
        >
          {next ? (
            <>
              <h1 className="card-title">
                감사합니다.
                <br />
                문의가 완료되었습니다.
              </h1>
              <p>오피스 매니저가 신속히 연락드리도록 하곘습니다.</p>
              <div className="box">
                <strong>상담 가능시간 :</strong>
                평일 09시 ~ 19시
              </div>
              <Link to="/" className="go-main">
                메인으로
              </Link>
            </>
          ) : (
            <>
              <img
                className="close"
                src={require("../../../static/close-button.png")}
                onClick={onClose}
              />
              <h1 className="card-title">상담신청</h1>
              <form className="input-wrapper">
                <input type="text" placeholder="성함" />
                <input type="text" placeholder="휴대폰 번호" />
                <input type="text" placeholder="업종" />
                <textarea placeholder="문의사항 (선택)" rows={4} />
                <div className="check-input">
                  <input type="checkbox" id="cb" />
                  <label htmlFor="cb" className="checkbox" />
                  <p>(필수) 개인정보취급방침에 동의합니다</p>
                </div>
                <input type="submit" onClick={onSubmit} value="신청하기" />
              </form>
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ReqeustDialog;

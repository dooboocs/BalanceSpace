import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Dialog } from "../../components/base";
import {
  ConsultCardA,
  ConsultCardB,
  ConsultSelectA,
} from "../../components/consult";
import "./index.scss";

const Consult = () => {
  const [popupA, setPopupA] = useState(false);
  const [popupB, setPopupB] = useState(false);
  const [popupC, setPopupC] = useState(false);
  const [active, setActive] = useState("A");
  const [detailDialog, setDetailDialog] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  const showPopupA = (e: any) => {
    e.preventDefault();
    setPopupA(true);
  };

  const showPopupB = (e: any) => {
    e.preventDefault();
    setPopupB(true);
  };

  const showPopupC = (e: any) => {
    e.preventDefault();
    setPopupC(true);
  };

  const switchActive = (e: any) => {
    e.preventDefault();
    setActive(e.target.id);
  };

  return (
    <div className="consult consult-1">
      <Link className="close" to="/">
        <img src={require("../../static/close-button.png")} />
      </Link>
      <h1 className="title">원하시는 상담 분야를 선택해주세요</h1>
      <div className="content">
        <ul className="card-wrapper">
          <Link to="/consult2">
            <ConsultSelectA title="비상주 사무실" tag="최저가" />
          </Link>
          <Link to="/consult2">
            <ConsultSelectA
              title="결합 A형"
              desc="(비상주 사무실+세무서비스)"
              tag="연 12만원 혜택"
              onClick={showPopupA}
            />
          </Link>
          <Link to="/consult2">
            <ConsultSelectA
              title="결합 B형"
              desc="(비상주 사무실 + 세무서비스 + 무료법인설립)"
              tag="연 64만원 혜택"
              onClick={showPopupB}
            />
          </Link>
        </ul>
        {isMobile ? (
          detailDialog ? (
            <div className="card-container">
              <img
                className="close-button"
                src={require("../../static/close-button.png")}
                onClick={() => setDetailDialog(false)}
              />
              <div className="switch-wrapper">
                <div
                  className={`switch ${active === "A" ? "active" : ""}`}
                  id="A"
                  onClick={switchActive}
                >
                  결합 A형
                </div>
                <div
                  className={`switch ${active === "B" ? "active" : ""}`}
                  id="B"
                  onClick={switchActive}
                >
                  결합 B형
                </div>
              </div>
              {active === "A" ? <ConsultCardA /> : <ConsultCardB />}
            </div>
          ) : (
            false
          )
        ) : (
          <>
            <Dialog visible={popupA}>
              <ConsultCardA onClose={() => setPopupA(false)} />
            </Dialog>
            <Dialog visible={popupB}>
              <ConsultCardB onClose={() => setPopupB(false)} />
            </Dialog>
          </>
        )}
        <a className="detail" onClick={() => setDetailDialog(true)}>
          자세히 알아보기
        </a>
      </div>
    </div>
  );
};

export default Consult;

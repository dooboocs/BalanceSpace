import React, { useEffect, useRef, useState } from "react";
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
  const [popupA, setPopupA] = React.useState(false);
  const [popupB, setPopupB] = React.useState(false);
  const [popupC, setPopupC] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const scrollViewRef = useRef<any>(null);

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

  useEffect(() => {
    function onScrollX() {
      if (scrollViewRef.current.scrollLeft > 430) {
        setActive(1);
      } else {
        setActive(0);
      }
    }

    if (scrollViewRef.current) {
      scrollViewRef.current.addEventListener("scroll", onScrollX);
      return () =>
        scrollViewRef.current.removeEventListener("scroll", onScrollX);
    }
  }, []);

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
          <Dialog visible={popupC}>
            <div className="mobile-dialog-inner">
              <div className="pagination">
                <span className={`dot ${active === 0 ? "active" : ""}`} />
                <span className={`dot ${active === 1 ? "active" : ""}`} />
              </div>
              <div className="card-scroll-view" ref={scrollViewRef}>
                <ConsultCardA />
                <ConsultCardB />
              </div>
            </div>
            <div
              className="mobile-dialog-close"
              onClick={() => setPopupC(false)}
            >
              닫기
            </div>
          </Dialog>
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
        <a className="detail" onClick={showPopupC}>
          자세히 알아보기
        </a>
      </div>
    </div>
  );
};

export default Consult;

import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Section5.css";

const Section5 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section5">
      <div className="section-inner">
        <h3 className="title">
          {isMobile ? (
            <>
              이런 서비스를
              <br />
              받을 수 있어요!
            </>
          ) : (
            <>이런 서비스를 받을 수 있어요!</>
          )}
        </h3>
        <div className="card-list">
          <div className="card">
            <img src={require("../../static/main5_01.png")} />
            <p className="sub">건물 주소 임대</p>
          </div>
          <div className="card">
            <img src={require("../../static/main5_02.png")} />
            <p className="sub">사업자등록 대행</p>
          </div>
          <div className="card">
            <img src={require("../../static/main5_03.png")} />
            <p className="sub">우편물 관리 서비스</p>
            <p className="label">(월 2회 발송)</p>
          </div>
          <div className="card">
            <img src={require("../../static/main5_04.png")} />
            <p className="sub">기관 / 관공서 실사 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;

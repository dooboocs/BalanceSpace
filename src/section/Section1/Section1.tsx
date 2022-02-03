import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Section1.css";

const Section1 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className="section1">
      <div className="section-inner">
        <h1 className="title gradient">
          {isMobile ? (
            <p>
              국내 최저가
              <br />
              비상주 사무실
              <br />
              밸런스 스페이스
            </p>
          ) : (
            <p>
              국내 최저가 비상주 사무실
              <br />
              밸런스 스페이스
            </p>
          )}
        </h1>
        {isMobile ? (
          <p className="sub">
            서울 역세권 건물주소로
            <br />
            비즈니스의 신뢰도를 높여보세요.
          </p>
        ) : (
          <p className="sub">
            서울 역세권 건물주소로 비즈니스의 신뢰도를 높여보세요.
          </p>
        )}
        <button>빠른 상담하기</button>
        <img className="main-image" src={require("../../static/sample.png")} />
      </div>
    </section>
  );
};

export default Section1;

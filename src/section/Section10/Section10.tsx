import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Section10.scss";

const Section10 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return (
    <section className="section10">
      <div className="section-inner">
        <h2 className="title">
          {isMobile ? (
            <>
              비상주 사무실,
              <br />
              지금 바로 상담해보세요.
            </>
          ) : (
            <>비상주 사무실, 지금 바로 상담해보세요.</>
          )}
        </h2>
        <div className="button-group">
          <Link to="/consult">
            <button className="button filled">빠른 상담하기</button>
          </Link>
          <a href="#section8">
            <button className="button hover">요금안내 보기</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section10;

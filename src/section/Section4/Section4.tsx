import React from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as ArrowIcon } from "../../static/arrow_left.svg";
import "./Section4.css";

const Section4 = () => {
  const [active, setActive] = React.useState<number>(1);

  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <section className={"section4"}>
      <div className={`section-inner mode${active}`}>
        {isMobile ? (
          <h1 className="title">
            왜 밸런스 스페이스를
            <br />
            선택해야 할까요?
          </h1>
        ) : (
          <h1 className="title">왜 밸런스 스페이스를 선택해야 할까요?</h1>
        )}
        <div className="wrap">
          <div className="content">
            <div className="card">
              <h3 className="card-title">
                국내 최저가로
                <br />
                이용할 수 있어요
              </h3>
              <p className="card-sub">
                평균 25% 저렴한 국내 최저 수수료,
                <br />
                연간 12만원 이상의 비용을 절감할 수 있어요.
              </p>
              <div className="info-wrapper">
                <div className="info">
                  <div className="bar">타사</div>
                  <p>월 40,000원</p>
                </div>
                <div className="info">
                  <div className="bar blue">밸런스 스페이스</div>
                  <p>월 30,000원</p>
                </div>
              </div>
            </div>
          </div>
          <div className="controller">
            <button
              className={`controll ${active === 1 ? "active" : ""}`}
              onClick={() => setActive(1)}
            >
              {active === 1 ? <ArrowIcon className="arrow-icon" /> : null}
              수수료
            </button>
            <button
              className={`controll ${active === 2 ? "active" : ""}`}
              onClick={() => setActive(2)}
            >
              {active === 2 ? <ArrowIcon className="arrow-icon" /> : null}
              보증금/예치금
            </button>
            <button
              className={`controll ${active === 3 ? "active" : ""}`}
              onClick={() => setActive(3)}
            >
              {active === 3 ? <ArrowIcon className="arrow-icon" /> : null}
              특별 서비스
            </button>
            <button
              className={`controll ${active === 4 ? "active" : ""}`}
              onClick={() => setActive(4)}
            >
              {active === 4 ? <ArrowIcon className="arrow-icon" /> : null}
              시간
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

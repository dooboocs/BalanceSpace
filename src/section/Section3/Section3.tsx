import React from "react";
import "./Section3.css";

const Content1 = () => {
  return (
    <>
      <div className="card">
        <strong>🏠 아파트 주소지</strong>
        <p>○○시 ○○구 ○○아파트 A동, 301호</p>
      </div>
      <img src={require("../../static/arrow_bottom.png")} />
      <div className="card">
        <strong>🏢 건물 주소지</strong>
        <p>서울특별시 영등포구 국회대로 36길 6-1, 2층 a201</p>
      </div>
    </>
  );
};

const Content2 = () => {
  return (
    <div className="square-wrapper">
      <div className="square">
        <p>
          <strong>재택에서 사업</strong>을<br />
          운영하여 주소지만 필요한 사업자
        </p>
        <img className="bottom-icon" src={require("../../static/house.png")} />
      </div>
      <div className="square">
        <p>
          업무 특성상 별도의
          <br />
          <strong>사무실 공간이 불필요</strong>한 사업자
        </p>
        <img
          className="bottom-icon"
          src={require("../../static/building.png")}
        />
      </div>
      <div className="square">
        <p>
          임대료, 관리비 등의
          <br />
          <strong>비용 절감</strong>이 필요한 사업자
        </p>
        <img
          className="bottom-icon"
          src={require("../../static/card-receive.png")}
        />
      </div>
      <div className="square">
        <p>
          거래처에 높은
          <br />
          <strong>비즈니스 신뢰도</strong>를 주고자 하는 사업자
        </p>
        <img className="bottom-icon" src={require("../../static/bag.png")} />
      </div>
    </div>
  );
};

const Section3 = () => {
  const [active, setActive] = React.useState<boolean>(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <section className={`section3 ${active ? "active" : ""}`}>
      <div className="section-inner">
        <h3 className="title">비상주 사무실이 무엇인가요?</h3>
        <p className="sub">
          최소의 비용으로 주소지만 임대하여 사용하는 사무실을 말합니다.
          <br />
          역세권 건물 주소로 비즈니스의 신뢰도를 높여보세요.
        </p>
        <div className="wrap">
          <div className="link-group">
            <button
              className={`link ${active ? "" : "active"}`}
              onClick={toggleActive}
            >
              주소 비교
            </button>
            <button
              className={`link ${!active ? "" : "active"}`}
              onClick={toggleActive}
            >
              추천 대상
            </button>
          </div>

          {active ? <Content2 /> : <Content1 />}
        </div>
      </div>
    </section>
  );
};

export default Section3;

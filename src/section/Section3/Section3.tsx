import React from "react";
import { StyleSheet, css } from "aphrodite";
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
          <strong className={css(styles.strong)}>재택에서 사업</strong>을<br />
          운영하여 주소지만 필요한 사업자
        </p>
        <img
          className={css(styles.card_icon)}
          src={require("../../static/house.png")}
        />
      </div>
      <div className="square">
        <p>
          업무 특성상 별도의
          <br />
          <strong className={css(styles.strong)}>사무실 공간이 불필요</strong>한
          사업자
        </p>
        <img
          className={css(styles.card_icon)}
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

const styles = StyleSheet.create({
  section: {
    background: "#FEF7E3",
    height: 780,
    paddingTop: 128,
  },
  section_active: {
    background: "#E4F2F2",
  },
  section_inner: {
    width: 1080,
    margin: "0 auto",
  },
  title: {
    color: "#454F5D",
    fontSize: 40,
    fontWeight: 700,
  },
  subTitle: {
    color: "#838A9A",
    fontSize: 20,
    fontWeight: 400,
    marginTop: 16,
  },
  wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 25,
    marginTop: 42,
  },
  linkGroup: {
    display: "flex",
    alignItems: "center",
    gap: 85,
    marginBottom: 20,
  },
  link: {
    cursor: "pointer",
    color: "#454F5D",
    fontSize: 22,
    fontWeight: 700,
  },
  active: {
    color: "#FFC10D",
    paddingBottom: 2,
    borderBottom: "solid #FFC10D 3px",
  },
  active2: {
    color: "#25BBBB",
    paddingBottom: 2,
    borderBottom: "solid #25BBBB 3px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    position: "relative",
    background: "#fff",
    borderRadius: 15,
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.06)",
    height: 80,
    width: 570,
    fontSize: 18,
  },
  bold: {
    color: "#454F5D",
    fontWeight: 700,
    marginRight: 27,
  },
  light: {
    color: "#838A9A",
    fontWeight: 400,
  },
  wrap2: {
    display: "flex",
    gap: 20,
    textAlign: "left",
  },
  card_sqaure: {
    width: 255,
    height: 250,
    padding: 25,
    position: "relative",
    color: "#9ED6D6",
    background: "#fff",
    fontWeight: 700,
    borderRadius: 20,
    fontSize: 22,
    lineHeight: "34px",
  },
  strong: {
    color: "#25BBBB",
  },
  card_icon: {
    position: "absolute",
    bottom: 25,
    right: 25,
    fontSize: 42,
  },
});

export default Section3;

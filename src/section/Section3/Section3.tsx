import React from "react";
import { StyleSheet, css } from "aphrodite";
import "./Section3.css";

const Content1 = () => {
  return (
    <>
      <div className="card">
        <strong>π  μννΈ μ£Όμμ§</strong>
        <p>ββμ ββκ΅¬ ββμννΈ Aλ, 301νΈ</p>
      </div>
      <img src={require("../../static/arrow_bottom.png")} />
      <div className="card">
        <strong>π’ κ±΄λ¬Ό μ£Όμμ§</strong>
        <p>μμΈνΉλ³μ μλ±ν¬κ΅¬ κ΅­νλλ‘ 36κΈΈ 6-1, 2μΈ΅ a201</p>
      </div>
    </>
  );
};

const Content2 = () => {
  return (
    <div className="square-wrapper">
      <div className="square">
        <p>
          <strong className={css(styles.strong)}>μ¬νμμ μ¬μ</strong>μ<br />
          μ΄μνμ¬ μ£Όμμ§λ§ νμν μ¬μμ
        </p>
        <img
          className={css(styles.card_icon)}
          src={require("../../static/house.png")}
        />
      </div>
      <div className="square">
        <p>
          μλ¬΄ νΉμ±μ λ³λμ
          <br />
          <strong className={css(styles.strong)}>μ¬λ¬΄μ€ κ³΅κ°μ΄ λΆνμ</strong>ν
          μ¬μμ
        </p>
        <img
          className={css(styles.card_icon)}
          src={require("../../static/building.png")}
        />
      </div>
      <div className="square">
        <p>
          μλλ£, κ΄λ¦¬λΉ λ±μ
          <br />
          <strong>λΉμ© μ κ°</strong>μ΄ νμν μ¬μμ
        </p>
        <img
          className="bottom-icon"
          src={require("../../static/card-receive.png")}
        />
      </div>
      <div className="square">
        <p>
          κ±°λμ²μ λμ
          <br />
          <strong>λΉμ¦λμ€ μ λ’°λ</strong>λ₯Ό μ£Όκ³ μ νλ μ¬μμ
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
        <h3 className="title">λΉμμ£Ό μ¬λ¬΄μ€μ΄ λ¬΄μμΈκ°μ?</h3>
        <p className="sub">
          μ΅μμ λΉμ©μΌλ‘ μ£Όμμ§λ§ μλνμ¬ μ¬μ©νλ μ¬λ¬΄μ€μ λ§ν©λλ€.
          <br />
          μ­μΈκΆ κ±΄λ¬Ό μ£Όμλ‘ λΉμ¦λμ€μ μ λ’°λλ₯Ό λμ¬λ³΄μΈμ.
        </p>
        <div className="wrap">
          <div className="link-group">
            <button
              className={`link ${active ? "" : "active"}`}
              onClick={toggleActive}
            >
              μ£Όμ λΉκ΅
            </button>
            <button
              className={`link ${!active ? "" : "active"}`}
              onClick={toggleActive}
            >
              μΆμ² λμ
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

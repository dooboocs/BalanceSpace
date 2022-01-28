import React from "react";
import { StyleSheet, css } from "aphrodite";
import Sample from "../../static/sample.png";

const Main1 = () => {
  return (
    <section className={css(styles.section)}>
      <h1 className={`${css(styles.title)} gradient`}>
        국내 최저가 비상주 사무실
        <br />
        밸런스 스페이스
      </h1>
      <p className={css(styles.subTitle)}>
        서울 역세권 건물주소로 비즈니스의 신뢰도를 높여보세요.
      </p>
      <button className={css(styles.roundButton)}>빠른 상담하기</button>
      <img className={css(styles.mainImage)} src={Sample} />
    </section>
  );
};

const styles = StyleSheet.create({
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 100,
  },
  title: {
    display: "inline-block",
    fontWeight: 800,
    fontSize: 56,
    backgroundImage: "-webkit-linear-gradient(0deg, #5E6EFF, #4BCDFF)",
    lineHeight: "74px",
    margin: 0,
  },
  subTitle: {
    color: "#686D79",
    fontSize: 20,
    fontWeight: 400,
    lineHeight: "32px",
    marginTop: 20,
  },
  roundButton: {
    backgroundColor: "#5D73FF",
    color: "#fff",
    width: 250,
    height: 68,
    borderRadius: 50,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 56,
  },
  mainImage: {
    marginTop: 80,
    borderRadius: 30,
  },
});

export default Main1;

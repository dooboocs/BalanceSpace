import React from "react";
import { StyleSheet, css } from "aphrodite";

const Main2 = () => {
  return (
    <section>
      <div className={css(styles.section_inner)}>
        <h1 className={css(styles.title)}>
          비용은 <span className={css(styles.strong)}>최저,</span>
          <br />
          서비스는 <span className={css(styles.strong)}>최고,</span>
          <br />
          만족도는 <span className={css(styles.strong)}>최상</span>
        </h1>
        <div className={css(styles.masonry)}>
          <div className={css(styles.card, styles.card_light)}>
            <div className={css(styles.card_header)}>
              <img src={require("../../static/profile-circle.png")} />
              <div>
                <span className={css(styles.bold)}>이진호</span>님의 리뷰
              </div>
            </div>
            <div style={{ lineHeight: "32px" }}>
              <span className={css(styles.bold)}>저렴한 수수료</span>로 비용을
              많이 아낄 수 있어서 좋았어요.
            </div>
            <span className={css(styles.card_icon)}>💰</span>
          </div>

          <div className={css(styles.card, styles.card_dark)}>
            고객 만족도
            <span className={`${css(styles.bottom_gradient)} gradient`}>
              93%
            </span>
          </div>

          <div className={css(styles.card, styles.card_light)}>
            <div className={css(styles.card_header)}>
              <img src={require("../../static/profile-circle.png")} />
              <div>
                <span className={css(styles.bold)}>이정진</span>님의 리뷰
              </div>
            </div>
            <div style={{ lineHeight: "32px" }}>
              우편물 관리, 재계약 등의{" "}
              <span className={css(styles.bold)}>
                사후관리가 잘 되어 좋았어요.
              </span>
            </div>
            <span className={css(styles.card_icon)}>👍</span>
          </div>

          <div className={css(styles.card, styles.card_blank)} />

          <div className={css(styles.card, styles.card_dark)}>
            고객 추천지수
            <span className={`${css(styles.bottom_gradient)} gradient`}>
              92.%
            </span>
          </div>

          <div className={css(styles.card, styles.card_light)}>
            <div className={css(styles.card_header)}>
              <img src={require("../../static/profile-circle.png")} />
              <div>
                <span className={css(styles.bold)}>김휘로</span>님의 리뷰
              </div>
            </div>
            <div style={{ lineHeight: "32px" }}>
              신청과 계약 과정이
              <br />
              <span className={css(styles.bold)}>빠르고 편리해요.</span>
            </div>
            <span className={css(styles.card_icon)}>⚡</span>
          </div>

          <div className={css(styles.card, styles.card_dark)}>
            재계약 의사
            <span className={`${css(styles.bottom_gradient)} gradient`}>
              94%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = StyleSheet.create({
  section_inner: {
    width: 1080,
    margin: "0 auto",
    padding: "150px 0",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "left",
    color: "#AEB2B8",
    fontSize: 40,
    fontWeight: 700,
  },
  strong: {
    color: "#454F5D",
  },
  masonry: {
    display: "flex",
    flexFlow: "column wrap",
    gap: 20,
    width: 560,
    height: 800,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textAlign: "left",
    width: 255,
    fontSize: 20,
    fontWeight: 500,
    borderRadius: 30,
    padding: 25,
    position: "relative",
  },
  bold: {
    color: "#454F5D",
  },
  bottom_gradient: {
    backgroundImage: "-webkit-linear-gradient(0deg, #5E6EFF, #4BCDFF)",
    position: "absolute",
    bottom: 25,
    right: 25,
    fontSize: 37,
    fontWeight: 700,
  },
  card_header: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  card_icon: {
    position: "absolute",
    bottom: 25,
    right: 25,
    fontSize: 48,
  },
  card_dark: {
    height: 140,
    background: "#29292E",
    color: "#fff",
  },
  card_light: {
    height: 300,
    background: "#F5F5F7",
    color: "#82858D",
  },
  card_blank: {
    height: 60,
    background: "transparent",
  },
});

export default Main2;

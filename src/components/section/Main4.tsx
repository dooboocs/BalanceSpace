import React from "react";
import { StyleSheet, css } from "aphrodite";

const Main4 = () => {
  const [active, setActive] = React.useState<number>(0);

  return (
    <section>
      <div className={css(styles.section_inner)}>
        <h1 className={css(styles.title)}>
          왜 밸런스 스페이스를 선택해야 할까요?
        </h1>
        <div className={css(styles.wrap)}>
          <div className={css(styles.left)}>
            <div className={css(styles.left_inner)}>
              <h3 className={css(styles.inner_title)}>
                국내 최저가로
                <br />
                이용할 수 있어요
              </h3>
              <p className={css(styles.inner_subTitle)}>
                평균 25% 저렴한 국내 최저 수수료,
                <br />
                연간 12만원 이상의 비용을 절감할 수 있어요.
              </p>
              <div className={css(styles.left_list)}>
                <div className={css(styles.left_list_item)}>
                  <div className={css(styles.bar1)}>타사</div>
                  <p>월 40,000원</p>
                </div>
                <div className={css(styles.left_list_item)}>
                  <div className={css(styles.bar2)}>밸런스 스페이스</div>
                  <p>월 30,000원</p>
                </div>
              </div>
            </div>
          </div>
          <div className={css(styles.right)}>
            <button
              className={css(
                styles.right_button,
                active === 0 ? styles.right_button_active : null
              )}
              onClick={() => setActive(0)}
            >
              {active === 0 ? (
                <img src={require("../../static/arrow_left.png")} />
              ) : null}
              수수료
            </button>
            <button
              className={css(
                styles.right_button,
                active === 1 ? styles.right_button_active : null
              )}
              onClick={() => setActive(1)}
            >
              {active === 1 ? (
                <img src={require("../../static/arrow_left.png")} />
              ) : null}
              보증금/예치금
            </button>
            <button
              className={css(
                styles.right_button,
                active === 2 ? styles.right_button_active : null
              )}
              onClick={() => setActive(2)}
            >
              {active === 2 ? (
                <img src={require("../../static/arrow_left.png")} />
              ) : null}
              특별 서비스
            </button>
            <button
              className={css(
                styles.right_button,
                active === 3 ? styles.right_button_active : null
              )}
              onClick={() => setActive(3)}
            >
              {active === 3 ? (
                <img src={require("../../static/arrow_left.png")} />
              ) : null}
              시간
            </button>
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
    paddingTop: 128,
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    color: "#454F5D",
  },
  wrap: {
    display: "flex",
    gap: 20,
    marginTop: 76,
  },
  left: {
    width: 720,
    background: "#C5D0F9",
    borderRadius: 30,
    height: 520,
    padding: "70px 70px 0 70px",
  },
  left_inner: {
    background: "#fff",
    width: "100%",
    height: "100%",
    boxShadow: "0px 3.85714px 21.2143px rgba(0, 0, 0, 0.1)",
    borderRadius: "20px 20px 0px 0px",
    padding: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  right: {
    width: 350,
    background: "#F5F5F7",
    borderRadius: 30,
    height: 520,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 26,
    padding: 40,
  },
  right_button: {
    fontSize: 24,
    fontWeight: 700,
    color: "#828A95",
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
  },
  right_button_active: {
    color: "#547AFF",
  },
  inner_title: {
    color: "#454F5D",
    fontWeight: 700,
    fontSize: 26,
  },
  inner_subTitle: {
    color: "#838A9A",
    fontWeight: 400,
    fontSize: 18,
    marginTop: 10,
  },
  left_list: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: 20,
    marginTop: 60,
  },
  left_list_item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#29292E",
    fontWeight: 700,

    ":nth-child(2)": {
      color: "#547AFF",
    },
  },
  bar1: {
    width: "70%",
    background: "#29292E",
    color: "#fff",
    borderRadius: 10,
    padding: "10px 20px",
    fontWeight: 700,
  },
  bar2: {
    width: "50%",
    background: "#547AFF",
    color: "#fff",
    borderRadius: 10,
    padding: "10px 20px",
    fontWeight: 700,
  },
});

export default Main4;

import React from "react";
import { ReactComponent as BottomChevron } from "../static/bottom_chevron.svg";
import Logo from "../static/logo.png";
import Sample from "../static/sample.png";
import { StyleSheet, css } from "aphrodite";
import Footer from "../components/base/Footer";
import {
  Main1,
  Main2,
  Main3,
  Main4,
  Main5,
  Main6,
} from "../components/section";

const Main = () => {
  return (
    <div>
      <header className={css(styles.navigation)}>
        <div className={css(styles.gnb)}>
          <img className={css(styles.logo)} src={Logo} alt="Balance Space" />
          <nav className={css(styles.nav)}>
            <div className={css(styles.navList)}>
              <button className={css(styles.navItem)}>
                비상주 사무실
                <BottomChevron className={css(styles.bottomChevron)} />
              </button>
              <button className={css(styles.navItem)}>위치 안내</button>
            </div>
            <button className={css(styles.filledButton)}>빠른 상담하기</button>
          </nav>
        </div>
      </header>

      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />

      <section className={css(styles.section, styles.section14)}>
        <h2 className={css(styles.section14_title)}>
          비상주 사무실, 지금 바로 상담해보세요.
        </h2>
        <div className={css(styles.section14_buttonGroup)}>
          <button className={css(styles.section14_filledButton)}>
            빠른 상담하기
          </button>
          <button className={css(styles.section14_button)}>
            요금안내 보기
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = StyleSheet.create({
  navigation: {
    borderBottom: "1px solid #EFF0F2",
  },
  gnb: {
    width: 1080,
    margin: "0 auto",
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  navList: {
    display: "flex",
    gap: 60,
  },
  navItem: {
    fontSize: 16,
    fontWeight: 400,
  },
  bottomChevron: {
    marginLeft: "0.25rem",
  },
  logo: {
    marginRight: 100,
  },
  filledButton: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    backgroundColor: "#29292E",
    color: "#fff",
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 7,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 100,
  },
  section14: {
    height: 300,
    background: "linear-gradient(90deg, #5E6EFF 0%, #4BCDFF 105.41%)",
    color: "#fff",
  },
  section14_title: {
    fontSize: 40,
    fontWeight: 700,
  },
  section14_buttonGroup: {
    display: "flex",
    gap: 20,
    marginTop: 30,
  },
  section14_filledButton: {
    background: "#fff",
    color: "#5795FF",
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 50,
    width: 210,
    height: 58,
  },
  section14_button: {
    background: "transparent",
    color: "#fff",
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 50,
    width: 210,
    height: 58,
  },
});

export default Main;

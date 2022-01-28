import React from "react";
import { StyleSheet, css } from "aphrodite";
import BottomLogo from "../../static/logo_footer.png";

const Footer = () => {
  return (
    <footer className={css(styles.footer)}>
      <div className={css(styles.footer_inner)}>
        <div className={css(styles.footer_col_1)}>
          <img src={BottomLogo} className={css(styles.footer_logo)} />
        </div>
        <div className={css(styles.footer_col_2)}>
          <span>서비스 이용약관</span>
          <span>개인정보처리방침</span>
        </div>
        <div className={css(styles.footer_col_3)}>
          <span>고객센터 1644-8681</span>
          <span>오전 9시 - 오후 7시 (주말, 공휴일 제외)</span>
          <span style={{ marginTop: 20 }}>카카오채널 @balance-space</span>
        </div>
      </div>
    </footer>
  );
};

const styles = StyleSheet.create({
  footer: {
    background: "#F5F5F7",
    position: "static",
    height: 300,
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer_inner: {
    display: "flex",
    width: 1080,
    paddingTop: 50,
    margin: "0 auto",
    color: "#ACB5C1",
    fontSize: 16,
  },
  footer_logo: {
    width: 200,
  },
  footer_col_1: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textAlign: "left",
  },
  footer_col_2: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textAlign: "left",
  },
  footer_col_3: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    textAlign: "left",
  },
});

export default Footer;

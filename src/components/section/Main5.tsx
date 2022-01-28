import React from "react";
import { StyleSheet, css } from "aphrodite";

const Main5 = () => {
  return (
    <section>
      <div className={css(styles.section_inner)}>
        <h3 className={css(styles.title)}>이런 서비스를 받을 수 있어요!</h3>
        <div className={css(styles.group)}>
          <div>
            <img src={require("../../static/main5_01.png")} />
            <p className={css(styles.subTitle)}>건물 주소 임대</p>
          </div>
          <div>
            <img src={require("../../static/main5_02.png")} />
            <p className={css(styles.subTitle)}>사업자등록 대행</p>
          </div>
          <div>
            <img src={require("../../static/main5_03.png")} />
            <p className={css(styles.subTitle)}>우편물 관리 서비스</p>
            <p className={css(styles.subText)}>(월 2회 발송)</p>
          </div>
          <div>
            <img src={require("../../static/main5_04.png")} />
            <p className={css(styles.subTitle)}>기관 / 관공서 실사 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = StyleSheet.create({
  section: {},
  section_inner: {
    width: 1080,
    padding: "150px 0",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    color: "#454F5D",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "#454F5D",
    marginTop: 30,
  },
  subText: {
    fontSize: 20,
    fontWeight: 400,
    color: "#B1B8C1",
    marginTop: 10,
  },
  group: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 65,
  },
});

export default Main5;

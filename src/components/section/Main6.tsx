import React from "react";
import { StyleSheet, css } from "aphrodite";

const Main6 = () => {
  return (
    <section className={css(styles.section)}>
      <div className={css(styles.section_inner)}>
        <h3 className={css(styles.title)}>
          오직, 밸런스 스페이스에서만 제공하는
          <br />
          <span className={`${css(styles.gradientText)} gradient`}>
            Benefit
          </span>{" "}
          서비스를 만나보세요
        </h3>
      </div>
    </section>
  );
};

const styles = StyleSheet.create({
  section: {
    background: "#15151D",
    height: 310,
  },
  section_inner: {
    width: 1080,
    margin: "0 auto",
    padding: "95px 0",
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    lineHeight: "60px",
    color: "#fff",
  },
  gradientText: {
    backgroundImage: "-webkit-linear-gradient(0deg, #8139F5, #FF8383)",
  },
});

export default Main6;

import React from "react";
import "./Section9.scss";
import { Masonry } from "@mui/lab";
import { useMediaQuery } from "react-responsive";
import { ScrollReveal } from "../../components/base/ScrollReveal";

const Section9 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return (
    <section className="section" id="section9">
      <div className="section-inner">
        <div className="section-header sticky">
          <div className="section-header-top">
            <img src={require("../../static/task.png")} />
            <p>이용절차</p>
          </div>
          <h1 className="section-header-title">
            오피스 매니저가
            <br />
            모든 과정을 도와줍니다
          </h1>
          <p className="section-header-sub">
            오피스 매니저가 상담부터 계약까지 꼼꼼히 도와드려요. 10분 만에 계약
            후 임대차 계약서를 바로 출력하실 수 있어요.
          </p>
        </div>

        <div className="section-content">
          <Masonry columns={2} spacing={isMobile ? 1 : 4}>
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/mail.png")} />
                </div>
                <div>
                  <span>1</span>
                  <p>빠른 상담신청</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="card blank" />
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/money.png")} />
                </div>
                <div>
                  <span>2</span>
                  <p>결제</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="card blank sm" />
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/pen.png")} />
                </div>
                <div>
                  <span>3</span>
                  <p>임대차 계약서</p>
                </div>
              </div>
            </ScrollReveal>
            <div className="card blank sm" />
            <ScrollReveal>
              <div className="card">
                <div className="bg">
                  <img src={require("../../static/section9/paper.png")} />
                </div>
                <div>
                  <span>4</span>
                  <p>사업자등록</p>
                </div>
              </div>
            </ScrollReveal>
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Section9;

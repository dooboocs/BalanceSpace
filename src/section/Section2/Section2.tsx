import React from "react";
import "./Section2.css";
import { Masonry } from "@mui/lab";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="section-inner">
        <h1 className="title">
          비용은 <strong>최저,</strong>
          <br />
          서비스는 <strong>최고,</strong>
          <br />
          만족도는 <strong>최상</strong>
        </h1>
        <div className="masonry">
          <Masonry columns={2} spacing={2}>
            <div className="card">
              <div className="card-header">
                <img src={require("../../static/profile-circle.png")} />
                <div>
                  <strong>이진호</strong>님의 리뷰
                </div>
              </div>
              <div className="card-content">
                <strong>저렴한 수수료</strong>로 비용을 많이 아낄 수 있어서
                좋았어요.
              </div>
              <span className="bottom-icon">💰</span>
            </div>

            <div className="card blank" />

            <div className="card dark">
              <h3>고객 추천지수</h3>
              <span className="bottom-gradient gradient">92.5%</span>
            </div>

            <div className="card">
              <div className="card-header">
                <img src={require("../../static/profile-circle.png")} />
                <div>
                  <strong>김휘로</strong>님의 리뷰
                </div>
              </div>
              <div className="card-content">
                신청과 계약 과정이 <strong>빠르고 편리해요.</strong>
              </div>
              <span className="bottom-icon">⚡</span>
            </div>

            <div className="card dark">
              <h3>고객 만족도</h3>
              <span className="bottom-gradient gradient">93%</span>
            </div>

            <div className="card">
              <div className="card-header">
                <img src={require("../../static/profile-circle.png")} />
                <div>
                  <strong>이정진</strong>님의 리뷰
                </div>
              </div>
              <div className="card-content">
                우편물 관리, 재계약 등의{" "}
                <strong>사후관리가 잘 되어 좋았어요.</strong>
              </div>
              <span className="bottom-icon">👍</span>
            </div>

            <div className="card dark">
              <h3>재계약 의사</h3>
              <span className="bottom-gradient gradient">94%</span>
            </div>
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Section2;

import React from "react";
import { ReactComponent as CardIcon } from "../../static/card.svg";
import "./Section8.css";

const Section8 = () => {
  return (
    <section className="section8">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-header-top">
            <CardIcon />
            비용
          </div>
          <div className="section-header-title">
            보증금/예치금 없이
            <br />
            비상주 사무실을 이용해보세요
          </div>
        </div>

        <div className="section-content">
          <div className="card-list">
            <div className="card">
              <p>3개월</p>
              <div>
                <p>
                  <strong>60,000원</strong> / 월
                </p>
                <p>100,000원</p>
              </div>
            </div>
            <div className="card">
              <p>3개월</p>
              <div>
                <p>
                  <strong>60,000원</strong> / 월
                </p>
                <p>100,000원</p>
              </div>
            </div>
            <div className="card">
              <p>3개월</p>
              <div>
                <p>
                  <strong>60,000원</strong> / 월
                </p>
                <p>100,000원</p>
              </div>
            </div>
            <div className="card">
              <p>3개월</p>
              <div>
                <p>
                  <strong>60,000원</strong> / 월
                </p>
                <p>100,000원</p>
              </div>
            </div>
          </div>
          <p className="ghost">(VAT 별도)</p>
        </div>
      </div>
    </section>
  );
};

export default Section8;

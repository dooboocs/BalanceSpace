import React from "react";
import { ReactComponent as CardIcon } from "../../static/card.svg";
import "./Section8.scss";

interface CardProps {
  title: string;
  amount: string;
  discount: string;
}

const Card = ({ title, amount, discount }: CardProps) => {
  return (
    <div className="card">
      <img className="best-badge" src={require("../../static/best.png")} />
      <p className="card-title">{title}</p>
      <div className="card-sub">
        <p className="amount">
          <strong>{amount}</strong> / 월
        </p>
        <p className="discount">
          <span>{discount}</span>원
        </p>
      </div>
    </div>
  );
};

const Section8 = () => {
  return (
    <section className="section section8" id="section8">
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
            <Card title="3개월" amount="60,000원" discount="100,000" />
            <Card title="6개월" amount="40,000원" discount="80,000" />
            <Card title="12개월" amount="30,000원" discount="60,000" />
            <Card title="24개월" amount="25,000원" discount="50,000" />
          </div>
          <p className="ghost">(VAT 별도)</p>
        </div>
      </div>
    </section>
  );
};

export default Section8;

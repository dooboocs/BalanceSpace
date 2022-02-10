import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Cards.scss";

export const Card1 = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">
          국내 최저가로
          <br />
          이용할 수 있어요
        </h3>
        <p className="card-sub">
          평균 25% 저렴한 국내 최저 수수료,
          <br />
          연간 12만원 이상의 비용을 절감할 수 있어요.
        </p>
      </div>
      <div className="info-wrapper">
        <div className="info">
          <div className="bar">타사</div>
          <p>월 40,000원</p>
        </div>
        <div className="info blue">
          <div className="bar blue">밸런스 스페이스</div>
          <p>월 30,000원</p>
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">보증금/예치금 0원으로 더 아끼세요</h3>
        <p className="card-sub">
          보증금/예치금 반환 걱정 없이, 초기비용을 더 아낄 수 있어요.
        </p>
      </div>
      <img
        src={
          isMobile
            ? require("../../static/section4/m-chart.png")
            : require("../../static/section4/chart.png")
        }
        style={{ width: "100%" }}
      />
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">사업자 필수 서비스도 특가로 제공돼요</h3>
        <p className="card-sub">
          오직 밸런스 스페이스에서만 제공하는 베네핏 서비스로 할인과 이득 모두
          누리세요.
        </p>
      </div>
      <div className="card-content">
        <li>정부지원금 무료 컨설팅</li>
        <li>노무/법률/법무/세무 서비스</li>
        <li>사업자카드/영업용차량 서비스</li>
      </div>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">10분만에 빠르고 편리하게 계약하세요</h3>
        <p className="card-sub">
          방문 및서류 제출 없이 빠르게 계약이 진행되어 이용 시간을 대폭 줄일 수
          있어요.
        </p>
      </div>
      <div className="card-content">
        <img
          src={require("../../static/section4/graphics.png")}
          style={{ width: "80%", margin: "0 auto" }}
        />
        <label>*법인의 경우, 서류 제출이 필요합니다.</label>
      </div>
    </div>
  );
};

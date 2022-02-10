import React from "react";
import "./Content.scss";
import { ReactComponent as ArrowIcon } from "../../static/arrow_left.svg";
import { Card1, Card2, Card3, Card4 } from "./Cards";

const renderCard = (active: number) => {
  switch (active) {
    case 1:
      return <Card1 />;
    case 2:
      return <Card2 />;
    case 3:
      return <Card3 />;
    case 4:
      return <Card4 />;
  }
};

const Content = () => {
  const [active, setActive] = React.useState(1);

  const onHover = (e: any) => {
    setActive(parseInt(e.target.id));
  };

  return (
    <div className="section-inner">
      <h1 className="title">왜 밸런스 스페이스를 선택해야 할까요?</h1>
      <div className="wrap">
        <div className={`content mode-${active}`}>{renderCard(active)}</div>
        <div className="controller">
          <button
            className={`controll ${active === 1 ? "active" : ""}`}
            id="1"
            onMouseEnter={onHover}
          >
            <ArrowIcon className="arrow-icon" />
            수수료
          </button>
          <button
            className={`controll ${active === 2 ? "active" : ""}`}
            id="2"
            onMouseEnter={onHover}
          >
            <ArrowIcon className="arrow-icon" />
            보증금/예치금
          </button>
          <button
            className={`controll ${active === 3 ? "active" : ""}`}
            id="3"
            onMouseEnter={onHover}
          >
            <ArrowIcon className="arrow-icon" />
            특별 서비스
          </button>
          <button
            className={`controll ${active === 4 ? "active" : ""}`}
            id="4"
            onMouseEnter={onHover}
          >
            <ArrowIcon className="arrow-icon" />
            시간
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;

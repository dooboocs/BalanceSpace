import React from "react";
import { useMediaQuery } from "react-responsive";
import "../ConsultSelect.scss";
import "./ConsultSelectA.scss";

interface ConsultSelectAProps {
  title: string;
  desc?: string;
  tag: string;
  onClick?: any;
}

const ConsultSelectA = ({ title, desc, tag, onClick }: ConsultSelectAProps) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return isMobile ? (
    <div className="consult-select small" id="type-a">
      <div className="inner">
        <div className="title">{title}</div>
        <div className="tag">{tag}</div>
      </div>
      {desc && <div className="desc">{desc}</div>}
    </div>
  ) : (
    <div className="consult-select" id="type-a">
      <div className="inner">
        <div className="title">{title}</div>
        {desc && <div className="desc">{desc}</div>}
      </div>
      <div className="tag">{tag}</div>
      {onClick && (
        <button className="more" onClick={onClick}>
          자세히 알아보기
        </button>
      )}
    </div>
  );
};

export default ConsultSelectA;

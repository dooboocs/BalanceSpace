import React from "react";
import "../ConsultSelect.scss";
import "./ConsultSelectB.scss";

interface ConsultSelectBProps {
  title: string;
  price: string;
  ogPrice: string;
  best?: boolean;
  onClick: any;
}

const ConsultSelectB = ({
  title,
  price,
  ogPrice,
  best,
  onClick,
}: ConsultSelectBProps) => {
  return (
    <div className="consult-select" id="type-b" onClick={onClick}>
      <div className="left">
        <strong>{title}</strong>
        {best && <span className="best">BEST</span>}
      </div>
      <div className="right">
        <label>{ogPrice}</label>
        <p>
          <strong>{price}</strong> / 월
        </p>
      </div>
    </div>
  );
};

export default ConsultSelectB;

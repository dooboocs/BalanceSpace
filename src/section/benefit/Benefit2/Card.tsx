import React from "react";

interface CardProps {
  bgColor: string;
  color: string;
  spanColor: string;
  title: string;
  desc: string;
  service: string;
}

const Card = ({
  bgColor,
  color,
  spanColor,
  title,
  desc,
  service,
}: CardProps) => {
  return (
    <div className="card" style={{ background: bgColor }}>
      <div className="card-header">
        <strong style={{ color: color }}>{title}</strong>
        <p>{desc}</p>
      </div>
      <div className="card-content">
        <span style={{ background: spanColor }}>제공 서비스</span>
        <p>{service}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { useMediaQuery } from "react-responsive";
import { Header } from "../components/Header";
import "./Location.css";

const Location = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  return (
    <>
      <Header />
      <section className="location">
        <div className="section-inner">
          <h3 className="section-title">
            {isMobile ? (
              <>
                밸런스 스페이스
                <br />
                위치 안내
              </>
            ) : (
              <>밸런스 스페이스 위치 안내</>
            )}
          </h3>
          <div className="map-wrapper">지도</div>
          <div className="text-wrapper">
            <div className="row">
              <label>위치</label>
              <p>
                서울특별시 영등포구 국회대로 36길 6-1, 2층{" "}
                <span>(영등포구청역 4번 출구)</span>
              </p>
            </div>
            <div className="row">
              <label>전화</label>
              <p>1644 - 8681</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;

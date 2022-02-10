import React from "react";
import { useMediaQuery } from "react-responsive";

const BenefitCard = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 475px)",
  });

  return (
    <div className="card">
      <div className="card-header">
        {isMobile ? (
          <p className="card-title">#매출액 3억 #종업원 4명 (신규채용 2명)</p>
        ) : (
          <>
            <p className="card-title">개인 사업자</p>
            <ul>
              <li>매출액 3억</li>
              <li>종업원 4명 (신규채용 2명)</li>
            </ul>
          </>
        )}
      </div>
      <div className="card-content">
        <div className="table">
          <div className="row">
            <div className="row-item">혜택 목록</div>
            <div className="row-item">계산</div>
            <div className="row-item">혜택 금액</div>
          </div>
          <div className="row">
            <div className="row-item">청년채용지원금</div>
            <div className="row-item">1,000만원 x 2명</div>
            <div className="row-item">20,000,000원</div>
          </div>
          <div className="row">
            <div className="row-item">일자리안정자금</div>
            <div className="row-item">13만원 x 4명 x 12개월</div>
            <div className="row-item">6,240,000원</div>
          </div>
          <div className="row">
            <div className="row-item">두루누리지원금</div>
            <div className="row-item">12만원 x 4명 x 12개월</div>
            <div className="row-item">5,760,000원</div>
          </div>
        </div>
        <div className="row total">
          <div className="row-item">합계</div>
          <div className="row-item">연간 32,000,000원 혜택</div>
          <div className="row-item"></div>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;

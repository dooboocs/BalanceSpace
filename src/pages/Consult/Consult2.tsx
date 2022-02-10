import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConsultSelectB, RequestDialog } from "../../components/consult";

const Consult2 = () => {
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const onOpen = () => {
    setDialogVisible(true);
  };

  const onClose = () => {
    setDialogVisible(false);
  };

  return (
    <div className="consult" id="consult2">
      <img
        src={require("../../static/back-button.png")}
        style={{ width: 32 }}
        onClick={() => navigate(-1)}
        className="close"
      />
      <h1 className="title">비상주 사무실 이용기간을 선택해주세요</h1>
      <ul className="card-wrapper">
        <ConsultSelectB
          title="3개월"
          price="60,000원"
          ogPrice="100,000원"
          onClick={onOpen}
        />
        <ConsultSelectB
          title="6개월"
          price="40,000원"
          ogPrice="80,000원"
          onClick={onOpen}
        />
        <ConsultSelectB
          title="12개월"
          price="30,000원"
          ogPrice="60,000원"
          best
          onClick={onOpen}
        />
        <ConsultSelectB
          title="24개월"
          price="25,000원"
          ogPrice="50,000원"
          onClick={onOpen}
        />
      </ul>
      <RequestDialog visible={dialogVisible} onClose={onClose} />
    </div>
  );
};

export default Consult2;

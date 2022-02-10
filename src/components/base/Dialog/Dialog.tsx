import React from "react";
import "./Dialog.scss";

interface DialogProps {
  visible: boolean;
  children: React.ReactChild | React.ReactChild[];
}

const Dialog = ({ visible, children }: DialogProps) => {
  return (
    <div className={`dialog-container ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default Dialog;

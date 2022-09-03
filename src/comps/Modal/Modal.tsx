// import React from "react";
import * as sc from "./Modal.styles";

export interface ModalProps {
  color?: "green" | "yellow" | "red";
  children?: any;
  isVisible: boolean;
  title: string;
}

const Modal = ({children, color, isVisible, title, ...moreProps}: ModalProps) => {
  return (
    <sc.Backdrop isVisible={isVisible}>
      <sc.Modal {...moreProps} isVisible={isVisible}>
        <sc.Header data-cy="modal-header" color={color}>
          {title}
        </sc.Header>
        <sc.Body>{children}</sc.Body>
      </sc.Modal>
    </sc.Backdrop>
  );
};

const defaultProps = {
  title: "",
  color: "green",
  isVisible: false,
};

Modal.defaultProps = defaultProps;
Modal.displayName = "Modal";

export default Modal;

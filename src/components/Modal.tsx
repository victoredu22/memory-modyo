import React, { useState, useEffect } from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

interface ContainerProps {
  children: React.ReactNode;
  open: boolean;
}

const Modal: React.FC<ContainerProps> = ({ children, open }) => {
  const [show, setShow] = useState(open);

  useEffect(() => {
    setShow(open);
  }, [open]);

  const handleClose = () => setShow(false);

  return (
    <div>
      <BootstrapModal show={show} onHide={handleClose}>
        <BootstrapModal.Body style={{ width: "100%" }} className="text-center">
          {children}
        </BootstrapModal.Body>
      </BootstrapModal>
    </div>
  );
};

export default Modal;

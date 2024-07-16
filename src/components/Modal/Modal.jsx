import React from 'react';
import styled from 'styled-components';
import { FaWindowClose } from "react-icons/fa";

const shouldForwardProp = (prop) => prop !== 'isOpen';

const ModalWrapper = styled.div.withConfig({ shouldForwardProp })`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #6BD1FF;
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  height: 80%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <CloseButton onClick={onClose}> <FaWindowClose></FaWindowClose> </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

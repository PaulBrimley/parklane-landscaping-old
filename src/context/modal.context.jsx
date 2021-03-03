import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Close } from 'styled-icons/evil';

import { defaultConfig, fade } from '../transitions';

const ModalContext = createContext();
function useModalState() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModalState must be used within ModalProvider');
  const [state, setState] = context;

  useEffect(() => {
    let type = 'auto';
    if (state.modalOpen) type = 'hidden';
    document.body.style.overflow = type;
  }, [state.modalOpen]);

  function toggleModal({ content, open }) {
    setState({
      ...state,
      content: content || state.content,
      modalOpen: open
    });
  }
  function setModalContent(content) {
    setState({
      ...state,
      content: content || ''
    });
  }

  return {
    content: state.content,
    modalOpen: state.modalOpen,

    Modal,
    setModalContent,
    toggleModal
  };
}
function ModalProvider(props) {
  const [state, setState] = useState({
    content: null,
    modalOpen: false
  });
  const value = useMemo(() => [state, setState], [state]);
  return <ModalContext.Provider value={value} {...props} />;
}
function Modal() {
  const { content, modalOpen, setModalContent, toggleModal } = useModalState();
  const modalSpring = useSpring({
    ...fade({ opacityEnd: !modalOpen ? 0 : 1, opacityStart: !modalOpen ? 0 : 0 }),
    config: {
      tension: 100,
      friction: 5,
      clamp: true
    },
    onRest (ds) {
      if (!modalOpen) setModalContent();
    }
  });
  function handleClose() {
    toggleModal({ open: false });
  }
  return (
    <StyledModal className={!modalOpen ? 'hidden' : ''}>
      <animated.div className="overlay" style={modalSpring} onClick={handleClose} />
      <animated.div className="modal" style={modalSpring}>
        <div className="modal-header">
          <Close className="close-button" onClick={() => toggleModal({open: false})} />
        </div>
        <div className="modal-body">
          {content}
        </div>
      </animated.div>
    </StyledModal>
  );
}
const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  &.hidden {
    pointer-events: none;
  }
  .modal {
    width: 50%;
    max-height: 95%;
    min-height: 200px;
    min-width: 200px;
    z-index: 2002;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colorWhite};
    .modal-body {
      flex: 1 1 auto;
      overflow: auto;
    }
    .modal-header {
      text-align: right;
      padding: 5px;
      box-shadow: 0 0 2px ${({theme}) => theme.colorOpaque};
      .close-button {
        height: 20px;
        width: 20px;
        padding: 2px;
        cursor: pointer;
        color: ${({ theme }) => theme.colorPrimary};
        transition: all 0.2s;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colorSecondary};
        }
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2001;
    background-color: ${({ theme }) => theme.colorOpaque};
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .modal {
      width: auto;
      margin: 20px;
    }
  }
`;
export { ModalProvider, useModalState };

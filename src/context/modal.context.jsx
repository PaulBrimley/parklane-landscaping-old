import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

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
      content: content || '',
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
  const {content, modalOpen, toggleModal} = useModalState();
  const modalSpring = useSpring({
    ...fade({opacityEnd: !modalOpen ? 0 : 1, opacityStart: !modalOpen ? 0 : 0}),
    config: defaultConfig
  });
  function handleClose() {
    toggleModal({ open: false });
  }
  return (
    <StyledModal className={!modalOpen ? 'hidden' : ''}>
      <animated.div className="overlay" style={modalSpring} onClick={handleClose} />
      <animated.div className="modal" style={modalSpring}>
        {content}
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
    overflow: auto;
    background-color: ${({ theme }) => theme.colorWhite};
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
`;
export { ModalProvider, useModalState };

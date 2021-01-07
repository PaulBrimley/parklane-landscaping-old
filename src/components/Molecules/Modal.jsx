import React, { Fragment } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** components **/
import Button from '../Atoms/Button';
import StyledModal from '../Styled/StyledModal';
import StyledModalHeader from '../Styled/StyledModalHeader';
import StyledModalBody from '../Styled/StyledModalBody';
import StyledModalFooter from '../Styled/StyledModalFooter';

function Modal(props) {
  const { modal, setModal } = useAppState();
  return (
    <StyledModalHolder className={!modal.shown ? 'hidden' : ''}>
      <div className="overlay" onClick={() => setModal(false)} />
      <StyledModal>
        {
          modal.component ||
          <Fragment>
            {modal.header &&
              <StyledModalHeader>
                {modal.header}
              </StyledModalHeader>
            }
            <StyledModalBody>
              {modal.body || 'No content'}
            </StyledModalBody>
            <StyledModalFooter className="modal-footer">
              <Button
                clickFunc={() => setModal(false)}
                margin="0"
                type="tertiary"
              >Close</Button>
            </StyledModalFooter>
          </Fragment>
        }
      </StyledModal>
    </StyledModalHolder>
  );
}
const StyledModalHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  opacity: 1;
  transition: opacity 0.5s;
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
  }
`;
export default Modal;

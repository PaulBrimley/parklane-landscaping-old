import { Fragment, useEffect, useRef, useState } from 'react';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import { fromBottomFade } from '../../transitions';

function InfoBannerLeft(props) {
  const messageRef = useRef(null);
  const actionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const duration = 300;
  const messageTransition = fromBottomFade({ duration, positionStart: 50 });
  // const actionTransition =

  return (
    <StyledInfoBannerLeft>
      <Transition nodeRef={messageRef} in={visible} timeout={duration}>
        {state => (
          <div
            ref={messageRef}
            style={{
              ...messageTransition.defaultStyle,
              ...messageTransition.transitionStyles[state]
            }}
          >
            {props.message}
          </div>
        )}
      </Transition>
      <Transition nodeRef={actionRef} in={visible} timeout={duration}>
        {state => (
          <div
            ref={actionRef}
            style={{
              ...messageTransition.defaultStyle,
              ...messageTransition.transitionStyles[state]
            }}
          >
            {props.action}
          </div>
        )}
      </Transition>
      {/*<CSSTransition nodeRef={messageRef} in={visible} timeout={200} classNames="from-bottom-middle-fade" unmountOnExit>
        <div ref={messageRef}>{props.message}</div>
      </CSSTransition>
      <CSSTransition nodeRef={actionRef} in={visible} timeout={200} classNames="from-left-middle-fade" unmountOnExit>
        <div ref={actionRef}>{props.action}</div>
      </CSSTransition>*/}
    </StyledInfoBannerLeft>
  );
}
const StyledInfoBannerLeft = styled.div`
  .action {
  }
  .message {
  }
`;
export default InfoBannerLeft;

/*
<CSSTransition
  in={isAuthenticated}
  timeout={transitionTimeout}
  classNames="from-top"
  unmountOnExit
>
  <Header className="from-top" />
</CSSTransition>*/

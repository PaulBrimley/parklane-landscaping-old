import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Slide } from 'react-toastify';

/** context **/
import { useAppState } from './context/app.context';
import { useModalState } from './context/modal.context';

/** custom hooks **/
import useWindowDimensions from './hooks/useWindowDimensions.hook';

/** components **/
import Footer from './components/Organisims/Footer';
import Header from './components/Organisims/Header';
import Menu from './components/Organisims/Menu';
import Routes from './routes/Routes';
import StyledToastContainer from './components/Styled/StyledToastContainer';

function App() {
  const { handleWidthChange, isMobile, mobileWidth, theme } = useAppState();
  const { Modal, modalOpen } = useModalState();
  const appRef = useRef();
  const { width } = useWindowDimensions(appRef);
  const transitionTimeout = 200;

  const themeInfo = {
    ...theme,
    isMobile,
    mobileWidth,
    transitionTimeout
  };

  useEffect(() => {
    handleWidthChange(width);
  }, [width]);

  return (
    <ThemeProvider theme={themeInfo}>
      <StyledApp ref={appRef}>
        <StyledToastContainer transition={Slide} hideProgressBar={true} autoClose={5000}/>
        <Modal />
        <Router>
          <Menu />
          <Header />
          <div className="routes">
            <Routes transitionTimeout={transitionTimeout} />
          </div>
          <Footer />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}
const StyledApp = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 950px;
  min-width: 300px;
  margin: 0 auto;
  .routes {
    flex: 1 1 auto;
  }
`;

export default App;

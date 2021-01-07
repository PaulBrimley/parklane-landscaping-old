import React, { useCallback, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer, Flip } from 'react-toastify';

/** context **/
import { useAppState } from './context/app.context';

/** custom hooks **/
import useWindowDimensions from './hooks/useWindowDimensions';

/** components **/
import Modal from './components/Molecules/Modal';
import Routes from './routes/index';

function App() {
  const { handleWidthChange, isMobile, theme } = useAppState();

  const { width } = useWindowDimensions();
  const transitionTimeout = 200;

  const themeInfo = {
    ...theme,
    isMobile,
    transitionTimeout
  };

  useEffect(() => {
    handleWidthChange(width);
  }, [width]);

  return (
    <ThemeProvider theme={themeInfo}>
      <StyledApp>
        <ToastContainer transition={Flip} hideProgressBar={true}/>
        <Modal />
        <Routes transitionTimeout={transitionTimeout} />
      </StyledApp>
    </ThemeProvider>
  );
}
const StyledApp = styled.div`

`;

export default App;

import React, { useState } from 'react';
import styled from 'styled-components';

/** components **/
import Footer from '../components/Organisims/Footer';
import Header from '../components/Organisims/Header';
import StyledRoute from '../components/Styled/StyledRoute';

function HomeRoute(props) {
  return (
    <StyledRoute>
      <Header />
      home

      <Footer />
    </StyledRoute>
  );
}
export default HomeRoute;

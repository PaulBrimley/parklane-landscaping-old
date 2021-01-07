import React, { useState } from 'react';
import styled from 'styled-components';

/** components **/
import Footer from '../components/Organisims/Footer';
import Header from '../components/Organisims/Header';
import StyledRoute from '../components/Styled/StyledRoute';

function ContactRoute(props) {
  return (
    <StyledRoute>
      <Header />
      contact

      <Footer />
    </StyledRoute>
  );
}
export default ContactRoute;

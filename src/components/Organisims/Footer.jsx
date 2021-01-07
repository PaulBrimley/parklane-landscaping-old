import React from 'react';
import styled from 'styled-components';

function Footer(props) {

  return (
    <StyledFooter>
      footer
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  border: 1px solid blue;
  height: 50px;
  /*background-color: ${({theme}) => theme.colorSecondaryOpaque};*/
`;

export default Footer;

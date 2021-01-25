import React, { useState } from 'react';
import styled from 'styled-components';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import InfoBannerRight from '../components/Molecules/InfoBannerRight';
import PageDivider1 from '../components/Atoms/PageDivider1';
import ParallaxStripe from '../components/Atoms/ParallaxStripe';
import StyledInfoBannerAction from '../components/Styled/StyledInfoBannerAction';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

function ContactRoute(props) {
  return (
    <AnimatedStyledRoute>
      <StyledContact className="body">
        stuff will go here for contact
      </StyledContact>
    </AnimatedStyledRoute>
  );
}
const StyledContact = styled.div`
  height: 90vh;
`;
export default ContactRoute;

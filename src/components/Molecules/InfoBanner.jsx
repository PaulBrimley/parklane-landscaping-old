import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

function InfoBanner({ backgroundUrl, parallaxStart, parallaxStrength = 0.2, scrollRef, slotLeft, slotRight }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (parallaxStart) setOffset(Math.max(0, scrollRef.current.scrollTop - parallaxStart));
      else setOffset(scrollRef.current.scrollTop);
    }
    if (scrollRef && scrollRef.current) scrollRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollRef && scrollRef.current) scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  return (
    <StyledInfoBanner backgroundUrl={backgroundUrl} style={{ backgroundPosition: `60% ${offset * parallaxStrength}px` }}>
      <div className="slotLeft">{slotLeft}</div>
      <div className="slotRight">{slotRight}</div>
    </StyledInfoBanner>
  );
}
const StyledInfoBanner = styled.div`
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: ${({ theme }) => (theme.isMobile ? 'column' : 'row')};
  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border-top: 8px solid ${({theme}) => theme.colorWhite};
  border-bottom: 8px solid ${({theme}) => theme.colorWhite};
  overflow: hidden;
  .slotLeft {
    flex: 40%;
    margin: 80px 0;
  }
  .slotRight {
    flex: 60%;
    margin: 80px 0;
  }
`;

export default InfoBanner;

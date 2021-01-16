import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

function InfoBanner({backgroundUrl, backgroundUrlAlt, parallaxStrength, scrollRef, slotLeft, slotRight }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(scrollRef.current.scrollTop);
    }
    if (scrollRef && scrollRef.current) scrollRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (scrollRef && scrollRef.current) scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  return (
    <StyledInfoBanner>
      <img
        src={backgroundUrl}
        alt={backgroundUrlAlt || 'img'}
        className="parallax"
        style={{transform: `translateY(${offset * parallaxStrength || 0.2}px)`}}
      />
      <div className="slotLeft">{slotLeft}</div>
      <div className="slotRight">{slotRight}</div>
    </StyledInfoBanner>
  );
}
const StyledInfoBanner = styled.div`
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: ${({theme}) => theme.isMobile ? 'column' : 'row'};
  overflow: hidden;
  .parallax {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .slotLeft {
    flex: 40%;
  }
  .slotRight {
    flex: 60%;
  }
`;

export default InfoBanner;

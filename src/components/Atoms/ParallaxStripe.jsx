import { useEffect, useState } from 'react';
import styled from 'styled-components';

function ParallaxStripe({ backgroundRepeat, backgroundSize = '110%', backgroundUrl, children, className, height, offsetAdjust = -200, parallaxStart, parallaxStrength = 0.2 }) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      if (parallaxStart) setOffset(Math.max(0, window.scrollY - Number(parallaxStart)));
      else setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledParallaxStripe backgroundSize={backgroundSize} backgroundUrl={backgroundUrl} className={className} style={{ backgroundPosition: `60% ${Number(offsetAdjust) + (offset * parallaxStrength)}px`, backgroundRepeat: backgroundRepeat || 'no-repeat', height: height || 'auto' }}>
      {children}
    </StyledParallaxStripe>
  );
}
const StyledParallaxStripe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({backgroundUrl}) => backgroundUrl});
  background-repeat: repeat;
  background-size: ${({backgroundSize}) => backgroundSize};
`;
export default ParallaxStripe;

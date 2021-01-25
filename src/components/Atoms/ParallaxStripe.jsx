import { useEffect, useState } from 'react';
import styled from 'styled-components';

function ParallaxStripe({ backgroundRepeat, backgroundUrl, children, className, height, parallaxStart, parallaxStrength = 0.2 }) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      if (parallaxStart) setOffset(Math.max(0, window.scrollY - parallaxStart));
      else setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledParallaxStripe backgroundUrl={backgroundUrl} className={className} style={{ backgroundPosition: `60% ${-200 + (offset * parallaxStrength)}px`, backgroundRepeat: backgroundRepeat || 'no-repeat', height: height || 'auto' }}>
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
  background-size: 110%;
`;
export default ParallaxStripe;

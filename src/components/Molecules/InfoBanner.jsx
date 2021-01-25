import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** images **/
import grassWhite from '../../assets/img/grass-white.png';

function InfoBanner({ config, className, slotLeft, slotRight }) {
  const { isMobile } = useAppState();
  const [backgroundPosition, setBackgroundPosition] = useState({
    xPixels: -50,
    yPercent: 60
  });
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [height, setHeight] = useState('300px');
  const [parallaxStart, setParallaxStart] = useState(0);
  const [parallaxStrength, setParallaxStrength] = useState(0.2);
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
  useEffect(() => {
    setBackgroundPosition({
      xPixels: config?.backgroundPosition?.xPixels || backgroundPosition.xPixels,
      yPercent: config?.backgroundPosition?.yPercent || backgroundPosition.yPercent
    });
    setBackgroundUrl(config?.backgroundUrl || backgroundUrl);
    setHeight(config?.height || height);
    setParallaxStart(config?.parallaxStart || parallaxStart);
    setParallaxStrength(config?.parallaxStrength || parallaxStrength);
  }, [config]);

  function getBackgroundPosition() {
    let adjustment = 0;
    if (isMobile) adjustment = 20;
    return `center, ${backgroundPosition.yPercent}% ${backgroundPosition.xPixels + adjustment + offset * parallaxStrength}px`;
  }

  return (
    <StyledInfoBanner backgroundUrl={backgroundUrl} className={className} style={{ backgroundPosition: getBackgroundPosition(), height: !isMobile && height ? height : 'auto' }}>
      <div className="grass" />
      <div className="slot-left">{slotLeft}</div>
      <div className="slot-right">{slotRight}</div>
    </StyledInfoBanner>
  );
}
const StyledInfoBanner = styled.div`
  position: relative;
  display: flex;
  background-image: linear-gradient(120deg, rgb(255, 0, 40) 0%, rgb(255, 0, 40) 40%, transparent 40%, transparent 100%), url(${({ backgroundUrl }) => backgroundUrl});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: 110%;
  border-top: 8px solid ${({ theme }) => theme.colorWhite};
  border-bottom: 8px solid ${({ theme }) => theme.colorWhite};
  overflow: hidden;
  .grass {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 40%;
    width: 5%;
    background: url(${grassWhite}) no-repeat 50% 100% / contain;
  }
  .slot-left {
    flex: 45%;
    display: flex;
    justify-content: flex-end;
  }

  .slot-right {
    flex: 55%;
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    flex-direction: column;
    background-size: 160%;
    .slot-left {
      margin: 0;
    }
    .slot-right {
      margin: 0;
    }
  }
`;

export default InfoBanner;

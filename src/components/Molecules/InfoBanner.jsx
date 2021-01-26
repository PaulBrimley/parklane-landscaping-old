import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** images **/
import grassWhite from '../../assets/img/grass-white.png';

function InfoBanner({ config, className, slotLeft, slotRight }) {
  const { isMobile } = useAppState();
  const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(120deg, rgb(255, 0, 40) 0%, rgb(255, 0, 40) 50%, transparent 50%, transparent 100%)');
  const [backgroundPosition, setBackgroundPosition] = useState({
    xPercent: 60,
    yPixels: -50
  });
  const [backgroundSize, setBackgroundSize] = useState(110);
  const [backgroundUrl, setBackgroundUrl] = useState('');
  const [height, setHeight] = useState('300px');
  const [parallaxStart, setParallaxStart] = useState(0);
  const [parallaxStrength, setParallaxStrength] = useState(0.2);
  const [offset, setOffset] = useState(0);
  const [rightGradientCover, setRightGradientCover] = useState(null);

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
    setBackgroundGradient(config?.backgroundGradient || backgroundGradient);
    setBackgroundPosition({
      xPercent: (config?.backgroundPosition?.xPercent || config?.backgroundPosition?.xPercent === 0) ? config?.backgroundPosition?.xPercent : backgroundPosition.xPercent,
      yPixels: (config?.backgroundPosition?.yPixels || config?.backgroundPosition?.yPixels === 0) ? config?.backgroundPosition?.yPixels : backgroundPosition.yPixels
    });
    setBackgroundSize((config?.backgroundSize || config?.backgroundSize === 0) ? config?.backgroundSize : backgroundSize);
    setBackgroundUrl(config?.backgroundUrl || backgroundUrl);
    setHeight(config?.height || height);
    setParallaxStart((config?.parallaxStart || config?.parallaxStart === 0) ? config?.parallaxStart : parallaxStart);
    setParallaxStrength((config?.parallaxStrength || config?.parallaxStrength === 0) ? config?.parallaxStrength : parallaxStrength);
    setRightGradientCover(config?.rightGradientCover !== undefined ? config.rightGradientCover : rightGradientCover);
  }, [config]);

  function getBackgroundPosition() {
    let adjustment = 0;
    if (isMobile) adjustment = 20;
    return `center, ${backgroundPosition.xPercent}% ${backgroundPosition.yPixels + adjustment + offset * parallaxStrength}px`;
  }

  return (
    <StyledInfoBanner
      backgroundGradient={backgroundGradient}
      backgroundUrl={backgroundUrl}
      className={className}
      rightGradientCover={rightGradientCover}
      style={{
        backgroundSize: `100%, ${backgroundSize}%`,
        backgroundPosition: getBackgroundPosition(),
        height: !isMobile && height ? height : 'auto'
      }}
    >
      {rightGradientCover && <div className="right-cover" />}
      <div className="grass" />
      <div className="slot-left">{slotLeft}</div>
      <div className="slot-right">{slotRight}</div>
    </StyledInfoBanner>
  );
}
const StyledInfoBanner = styled.div`
  position: relative;
  display: flex;
  background-image: ${({backgroundGradient}) => backgroundGradient}, url(${({ backgroundUrl }) => backgroundUrl});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  //border-top: 8px solid ${({ theme }) => theme.colorWhite};
  // border-bottom: 8px solid ${({ theme }) => theme.colorWhite};
  margin: 8px 0;
  overflow: hidden;
  .grass {
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 40%;
    width: 5%;
    background: url(${grassWhite}) no-repeat 50% 100% / contain;
  }
  .right-cover {
    background-image: ${({rightGradientCover}) => rightGradientCover || ''};
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .slot-left {
    flex: 45%;
    max-width: 600px;
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

import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** images **/
import grassWhite from '../../assets/img/grass-white.png';

function InfoBanner({ config, className, slotLeft, slotRight, style }) {
  const { isMobile } = useAppState();
  const [backgroundGradient, setBackgroundGradient] = useState('linear-gradient(120deg, rgb(255, 0, 40) 0%, rgb(255, 0, 40) 50%, transparent 50%, transparent 100%)');
  const [height, setHeight] = useState('300px');
  const [rightGradientCover, setRightGradientCover] = useState(null);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    setBackgroundGradient(config?.backgroundGradient || backgroundGradient);
    setHeight(config?.height || height);
    setRightGradientCover(config?.rightGradientCover !== undefined ? config.rightGradientCover : rightGradientCover);
  }, [config]);
  useEffect(() => {
    const newStyles = style;
    if (backgroundGradient && newStyles?.backgroundImage) newStyles.backgroundImage = `${backgroundGradient}, ${newStyles.backgroundImage}`;
    if (backgroundGradient && newStyles?.backgroundPosition) newStyles.backgroundPosition = `center, ${newStyles.backgroundPosition}`;
    if (backgroundGradient && newStyles?.backgroundSize) newStyles.backgroundSize = `100%, ${newStyles.backgroundSize}`;
    setStyles(newStyles);
  }, [backgroundGradient, style]);

  return (
    <StyledInfoBanner
      className={className}
      rightGradientCover={rightGradientCover}
      style={{
        ...styles,
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
  background-blend-mode: multiply;
  background-repeat: no-repeat;
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

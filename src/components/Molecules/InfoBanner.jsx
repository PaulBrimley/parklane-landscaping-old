import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function InfoBanner(props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(props.scrollRef.current.scrollTop);
    }
    if (props.scrollRef && props.scrollRef.current) props.scrollRef.current.addEventListener('scroll', handleScroll);
    return () => {
      if (props.scrollRef && props.scrollRef.current) props.scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [props.scrollRef]);

  return (
    <StyledInfoBanner>
      <img
        src={props.backgroundUrl}
        alt={props.backgroundUrlAlt || 'img'}
        className="parallax"
        style={{transform: `translateY(${offset * props.parallaxStrength || 0.2}px)`}}
      />
      <div className="slotLeft">{props.slotLeft}</div>
      <div className="slotRight">{props.slotRight}</div>
    </StyledInfoBanner>
  );
}
const StyledInfoBanner = styled.div`
  height: 600px;
  position: relative;
  display: flex;
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

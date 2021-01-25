import {useSpring, animated} from 'react-spring';

import { defaultConfig, translateHorizontalFade } from '../../transitions';

function InfoBannerRight({children, className}) {
  const spring = useSpring({
    ...translateHorizontalFade({positionStart: 10}),
    config: defaultConfig
  });
  return (
    <animated.div className={className} style={spring}>{children}</animated.div>
  );
}
export default InfoBannerRight;

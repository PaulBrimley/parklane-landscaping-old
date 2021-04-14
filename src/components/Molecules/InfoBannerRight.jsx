import {animated, useSpring} from 'react-spring';

import { defaultConfig, translateHorizontalFade } from '../../transitions';

function InfoBannerRight({children, className, config = {}}) {
  const spring = useSpring({
    ...translateHorizontalFade({positionStart: 10}),
    config: {
      ...defaultConfig,
      ...config
    }
  });
  return (
    <animated.div className={className} style={spring}>{children}</animated.div>
  );
}
export default InfoBannerRight;

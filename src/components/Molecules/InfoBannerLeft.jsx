import {useSpring, animated} from 'react-spring';

import { defaultConfig, translateHorizontalFade, translateVerticalFade } from '../../transitions';

function InfoBannerLeft({action, className, message}) {
  const messageSpring = useSpring({
    ...translateVerticalFade({positionStart: 10}),
    config: defaultConfig
  });
  const actionSpring = useSpring({
    ...translateHorizontalFade({positionStart: -10}),
    config: defaultConfig
  });

  return (
    <div className={className}>
      <animated.div style={messageSpring}>{message}</animated.div>
      <animated.div style={actionSpring}>{action}</animated.div>
    </div>
  );
}
export default InfoBannerLeft;

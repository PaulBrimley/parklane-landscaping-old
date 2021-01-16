import {useSpring, animated} from 'react-spring';

import { defaultConfig, translateHorizontalFade, translateVerticalFade } from '../../transitions';

function InfoBannerLeft(props) {
  const messageSpring = useSpring({
    ...translateVerticalFade({positionStart: 10}),
    config: defaultConfig
  });
  const actionSpring = useSpring({
    ...translateHorizontalFade({positionStart: -10}),
    config: defaultConfig
  });

  return (
    <div>
      <animated.div className="message" style={messageSpring}>{props.message}</animated.div>
      <animated.div className="action" style={actionSpring}>{props.action}</animated.div>
    </div>
  );
}
export default InfoBannerLeft;

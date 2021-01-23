import {forwardRef, useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring';

/** context **/
import { useAppState } from '../../context/app.context';

/** components **/
import StyledRoute from '../Styled/StyledRoute';

import { defaultConfig, translateHorizontal } from '../../transitions';

const AnimatedStyledRoute = forwardRef(({children}, ref) => {
  const { menuCollapsed } = useAppState();
  const [reverse, setReverse] = useState(false);

  const menuAppSpring = useSpring({
    ...translateHorizontal({positionStart: 0, positionEnd: menuCollapsed ? 0 : -10}),
    config: defaultConfig,
    reverse
  });
  return (
    <StyledRoute ref={ref}>
      <animated.div style={menuAppSpring}>
        {children}
      </animated.div>
    </StyledRoute>
  );
});
export default AnimatedStyledRoute;

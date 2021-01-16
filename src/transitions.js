export const defaultConfig = {
  tension: 80,
  friction: 14,
  clamp: true
};
export {
  fade,
  grow,
  translateHorizontal,
  translateHorizontalFade,
  translateVertical,
  translateVerticalFade
};

function fade({ opacityEnd = 1, opacityStart = 0 }) {
  return {
    from: { opacity: opacityStart },
    to: { opacity: opacityEnd }
  };
}
function grow({ opacityEnd = 1, opacityStart = 0, scaleEnd = 1, scaleStart = 0 }) {
  return {
    from: {},
    to: {}
    /*defaultStyle: {
      transition: `opacity ${duration}ms, transform ${duration}ms`,
      scale: scaleStart,
      opacity: opacityStart,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    transitionStyles: {
      entering: {
        opacity: opacityStart,
        scale: scaleStart
      },
      entered: {
        opacity: opacityEnd,
        scale: scaleEnd
      },
      exiting: {
        opacity: opacityEnd,
        scale: scaleEnd
      },
      exited: {
        opacity: opacityStart,
        scale: scaleStart
      }
    }*/
  };
}
function translateHorizontal({ positionEnd = 0, positionStart = 100 }) {
  return {
    from: { transform: `translateX(${positionStart}%)` },
    to: { transform: `translateX(${positionEnd})` }
  };
}
function translateHorizontalFade(options) {
  const fadeSettings = fade(options);
  const translateHorizontalSettings = translateHorizontal(options);
  return {
    from: {
      ...fadeSettings.from,
      ...translateHorizontalSettings.from
    },
    to: {
      ...fadeSettings.to,
      ...translateHorizontalSettings.to
    }
  };
}
function translateVertical({ positionEnd = 0, positionStart = 100 }) {
  return {
    from: { transform: `translateY(${positionStart}%)` },
    to: { transform: `translateY(${positionEnd})` }
  };
}
function translateVerticalFade(options) {
  const fadeSettings = fade(options);
  const translateVerticalSettings = translateVertical(options);
  return {
    from: {
      ...fadeSettings.from,
      ...translateVerticalSettings.from
    },
    to: {
      ...fadeSettings.to,
      ...translateVerticalSettings.to
    }
  };
}

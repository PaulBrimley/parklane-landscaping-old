exports.fade = fade;
exports.fromBottom = fromBottom;
exports.fromBottomFade = fromBottomFade;

const defaultDuration = 0.2;
function crossFade({duration = defaultDuration, opacityEnd = 1, opacityStart = 0}) {
  return {
    defaultStyle: {
      transition: `opacity ${duration}ms`,
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
      entering: { opacity: opacityStart },
      entered: { opacity: opacityEnd },
      exiting: { opacity: opacityEnd },
      exited: { opacity: opacityStart }
    }
  };
}
function fade({ duration = defaultDuration, opacityEnd = 1, opacityStart = 0 }) {
  return {
    defaultStyle: {
      transition: `opacity ${duration}ms`,
      opacity: opacityStart
    },
    transitionStyles: {
      entering: { opacity: opacityStart },
      entered: { opacity: opacityEnd },
      exiting: { opacity: opacityEnd },
      exited: { opacity: opacityStart }
    }
  };
}
function fromBottom({ duration = defaultDuration, positionEnd = 0, positionStart = 100 }) {
  return {
    defaultStyle: {
      transition: `transform ${duration}ms`,
      transform: `translateY(${positionStart}%)`
    },
    transitionStyles: {
      entering: { transform: `translateY(${positionStart}%)` },
      entered: { transform: `translateY(${positionEnd})` },
      exiting: { transform: `translateY(${positionEnd})` },
      exited: { transform: `translateY(${positionStart}%)` }
    }
  };
}
function fromBottomFade(options) {
  const fromBottomTransition = fromBottom(options);
  const fadeTransition = fade(options);
  return {
    defaultStyle: {
      ...fromBottomTransition.defaultStyle,
      ...fadeTransition.defaultStyle,
      transition: `${fromBottomTransition.defaultStyle.transition}, ${fadeTransition.defaultStyle.transition}`
    },
    transitionStyles: {
      entering: {
        ...fromBottomTransition.transitionStyles.entering,
        ...fadeTransition.transitionStyles.entering
      },
      entered: {
        ...fromBottomTransition.transitionStyles.entered,
        ...fadeTransition.transitionStyles.entered
      },
      exiting: {
        ...fromBottomTransition.transitionStyles.exiting,
        ...fadeTransition.transitionStyles.exiting
      },
      exited: {
        ...fromBottomTransition.transitionStyles.exited,
        ...fadeTransition.transitionStyles.exited
      }
    }
  };
}
function fromLeft({duration = defaultDuration}) {
  return {
    defaultStyle: {},
    transitionStyles: {
      entering: {},
      entered: {},
      exiting: {},
      exited: {}
    }
  };
}
function fromRight({duration = defaultDuration}) {
  return {
    defaultStyle: {},
    transitionStyles: {
      entering: {},
      entered: {},
      exiting: {},
      exited: {}
    }
  };
}
function fromTop({duration = defaultDuration}) {
  return {
    defaultStyle: {},
    transitionStyles: {
      entering: {},
      entered: {},
      exiting: {},
      exited: {}
    }
  };
}
function grow({duration = defaultDuration, opacityEnd = 1, opacityStart = 0, scaleEnd = 1, scaleStart = 0}) {
  return {
    defaultStyle: {
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
    }
  };
}


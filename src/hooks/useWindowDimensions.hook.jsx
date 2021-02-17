import { useState, useEffect } from 'react';

function getWindowDimensions(ref) {
  let width = window?.innerWidth;
  let height = window?.innerHeight;
  if (ref?.current) {
    width = ref.current.clientWidth;
    height = ref.current.clientHeight;
  }
  return {
    width,
    height
  };
}

export default function useWindowDimensions(ref) {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions(ref));

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(ref));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

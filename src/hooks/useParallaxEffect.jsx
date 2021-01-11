import { useState, useEffect } from 'react';

export default function useParallaxEffect({ parallaxRef, scrollRef, strength = 0 }) {
  strength = Math.min(Math.max(strength, -1), 1);
  const [offset, setOffset] = useState({
    x: 0,
    y: 0
  });
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    /*const interval = setInterval(() => {
      if (ref.current) {
        const {left, top} = getOffset(ref.current);
        setLeft(left);
        setTop(top);
      }
    }, 16);
    return () => {
      clearInterval(interval);
    };*/
    function handleScroll() {
      const {left, top} = getOffset(parallaxRef.current);
      setLeft(left);
      setTop(top);
    }
    scrollRef.current.addEventListener('scroll', handleScroll);
    return () => {
      scrollRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [parallaxRef.current, scrollRef.current]);
  useEffect(() => {
    setOffset({
      x: left * strength,
      y: offset.y
    });
  }, [left]);
  useEffect(() => {
    setOffset({
      x: offset.x,
      y: top * strength
    });
  }, [top]);

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top
    };
  }

  return { offset };
}

import { useState, useEffect } from 'react';

export default function useParallaxEffect({ scrollRef, strength = 0 }) {
  strength = Math.min(Math.max(strength, -1), 1);
  const [offset, setOffset] = useState({
    x: 0,
    y: 0
  });
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    let listenTo = window;
    if (scrollRef?.current) listenTo = scrollRef?.current;
    function handleScroll() {
      const scrollX = scrollRef?.current ? listenTo.scrollLeft : listenTo.scrollX;
      const scrollY = scrollRef?.current ? listenTo.scrollTop : listenTo.scrollY;
      setLeft(scrollX);
      setTop(scrollY);
    }
    listenTo.addEventListener('scroll', handleScroll);
    return () => {
      listenTo.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);
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

  return { offset };
}

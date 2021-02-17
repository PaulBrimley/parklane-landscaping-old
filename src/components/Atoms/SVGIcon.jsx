import { useEffect, useRef, useState } from 'react';

function SVGIcon({ children, className, color, d, fill, onClick, scrollRef, style, viewBox, width }) {
  const [strokeDashArray, setStrokeDashArray] = useState('');
  const [strokeDashOffset, setStrokeDashOffset] = useState();
  const ref = useRef();
  useEffect(() => {
    const pathLength = ref.current.getTotalLength();
    ref.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
    ref.current.style.strokeDashoffset = pathLength;
    ref.current.getBoundingClientRect();

    let listenTo = window;
    if (scrollRef?.current) listenTo = scrollRef?.current;

    function handleScroll() {
      const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      const drawLength = pathLength * scrollPercentage;

      // Draw in reverse
      ref.current.style.strokeDashoffset = pathLength - drawLength;

      // When complete, remove the dash array, otherwise shape isn't quite sharp
      // Accounts for fuzzy math
      if (scrollPercentage >= 0.99) {
        ref.current.style.strokeDasharray = 'none';

      } else {
        ref.current.style.strokeDasharray = pathLength + ' ' + pathLength;
      }
    }
    listenTo.addEventListener('scroll', handleScroll);
    return () => {
      listenTo.removeEventListener('scroll', handleScroll);
    };
  }, [ref.current, scrollRef]);
  return (
    <svg

      aria-hidden="true"
      className={className}
      height={width}
      onClick={onClick}
      preserveAspectRatio="none"
      style={style}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*<rect fill={fill} x="41.52" y="54.43" width="2.29" height="2.29"/>*/}
      {/*<rect fill={fill} x="47.87" y="54.43" width="2.29" height="2.29"/>*/}
      {/*<rect fill={fill} x="35.17" y="54.43" width="2.29" height="2.29"/>*/}
      <defs>
        <linearGradient id="left-to-right">
          <stop offset="0" stop-color="#4DAF4C">
            <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1" />
          </stop>
          <stop offset="0" stop-color="#fff">
            <animate dur="2s" attributeName="offset" fill="freeze" from="0" to="1" />
          </stop>

        </linearGradient>
      </defs>
      <path ref={ref} fill="url(#left-to-right)" stroke="red" d="M28.56,63.1a5.11,5.11,0,1,0,5.1,5.11A5.11,5.11,0,0,0,28.56,63.1Zm0,7.92a2.82,2.82,0,1,1,2.81-2.81A2.81,2.81,0,0,1,28.56,71Z M75.76,57.05a11.39,11.39,0,0,0-2.62.32L43.56,45.69l-.72-.29-.75.22L34.7,47.73,25.1,16.11H20.51a4.5,4.5,0,0,0-4.37-3.47H9.59a4.5,4.5,0,0,0,0,9h6.55a4.5,4.5,0,0,0,4.3-3.25h3l9.1,30-5.44,1.56-1.66.47v7.14a11.15,11.15,0,1,0,12.9,16.1H66a11.15,11.15,0,1,0,9.75-16.57ZM16.14,19.35H9.59a2.21,2.21,0,1,1,0-4.42h6.55a2.21,2.21,0,0,1,0,4.42ZM27.69,52.11l15-4.29,27.36,10.8a11.25,11.25,0,0,0-5,6.22H39.19a11.17,11.17,0,0,0-10.63-7.79,8.46,8.46,0,0,0-.87.05Zm.87,25a8.87,8.87,0,1,1,8.87-8.86A8.87,8.87,0,0,1,28.56,77.07Zm10.7-5.74a11.1,11.1,0,0,0,.45-3.12c0-.37,0-.73-.05-1.08h25a9.51,9.51,0,0,0-.06,1.08,11.11,11.11,0,0,0,.46,3.12Zm36.5,5.74a8.87,8.87,0,1,1,8.86-8.86A8.87,8.87,0,0,1,75.76,77.07Z M75.76,63.1a5.11,5.11,0,1,0,5.1,5.11A5.11,5.11,0,0,0,75.76,63.1Zm0,7.92a2.82,2.82,0,1,1,2.81-2.81A2.81,2.81,0,0,1,75.76,71Z"/>
    </svg>
  );
}
SVGIcon.defaultProps = {
  className: '',
  color: 'rgba(0, 0, 0, 0)',
  fill: 'rgba(0, 0, 0, 0)',
  onClick: null,
  style: null,
  viewBox: '0 0 100 100',
  width: '100%'
};
export default SVGIcon;

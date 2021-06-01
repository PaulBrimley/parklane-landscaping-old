import styled from 'styled-components';
const StyledPageDivider = styled.div`
  width: ${({ width }) => width || ''};
  border-bottom: 4px solid ${({ color, theme }) => color || theme.colorPrimary};
  margin: ${({margin}) => margin || '10px var(--side-margin)'};
`;
export default StyledPageDivider;

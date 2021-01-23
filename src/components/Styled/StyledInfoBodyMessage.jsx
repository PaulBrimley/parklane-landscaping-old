import styled from 'styled-components';

const StyledInfoBodyMessage = styled.div`
  color: ${({theme}) => theme.colorSecondary};
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.7em;
  margin: ${({margin}) => margin || '10px 30px'}
`;
export default StyledInfoBodyMessage;

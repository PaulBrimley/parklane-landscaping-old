import styled from 'styled-components';

const StyledInfoBodyMessage = styled.div`
  color: ${({theme}) => theme.colorSecondary};
  font-size: ${({fontSize}) => fontSize || '1.5em'};
  font-weight: 300;
  line-height: ${({lineHeight}) => lineHeight || '1.7em'};
  margin: ${({margin}) => margin || '10px 30px'};
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    margin: 20px;
  }
`;
export default StyledInfoBodyMessage;

import styled from 'styled-components';

const StyledInfoBannerAction = styled.div`
  display: flex;
  justify-content: ${({theme}) => theme.isMobile ? 'flex-start' : 'flex-end'};
  padding: 0 120px;
`;
export default StyledInfoBannerAction;

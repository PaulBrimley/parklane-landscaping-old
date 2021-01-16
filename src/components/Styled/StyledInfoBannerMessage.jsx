import styled from 'styled-components';

const StyledInfoBannerMessage = styled.div`
  padding-top: 30px;
  color: ${({theme}) => theme.colorWhite};
  text-align: ${({theme}) => theme.isMobile ? 'left' : 'right'};
  margin-bottom: 20px;
  .hr {
    border-bottom: 1px solid rgb(187, 169, 117);
  }
  .isBold {
    font-weight: 800;
  }
  .message {
    font-size: 2em;
    margin-top: 22px;
    padding-left: 20px;
  }
  .title {
    font-size: 3em;
    margin-bottom: 15px;
    padding-left: 20px;
  }
`;
export default StyledInfoBannerMessage;

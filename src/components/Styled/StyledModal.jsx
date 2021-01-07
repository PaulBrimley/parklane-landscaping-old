import styled from 'styled-components';

const StyledModal = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 500px;
  max-width: ${({theme}) => theme.isMobile ? '100vw' : '50%'};
  max-height: ${({theme}) => theme.isMobile ? '100vh' : 'calc(100vh - 20px)'};
  margin: 4px;
  background-color: #FFFFFF;
  overflow: hidden;
`;
export default StyledModal;

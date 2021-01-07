import styled from 'styled-components';

const StyledRoute = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colorPrimary};
    border-radius: 10px;
  }
`;
export default StyledRoute;

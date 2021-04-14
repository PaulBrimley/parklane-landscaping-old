import styled from 'styled-components';

export const StyledInfoCard = styled.div`
  border: 1px solid ${({theme}) => theme.colorSecondary};
  box-shadow: 0 0 10px ${({theme}) => theme.colorTransparent};
  background-color: ${({theme}) => theme.colorTransparent};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s;
  .header {
    //border: 1px solid blue;
    font-size: 1em;
    font-weight: 300;
    color: ${({theme}) => theme.colorWhite};
    text-transform: uppercase;
    padding: 10px 10px 9px;
    text-align: center;
    background-color: ${({theme}) => theme.colorPrimary};
    opacity: 0;
    transition: opacity 0.2s;
  }
  .icon {
    //border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    padding: 20px 0 10px;
    svg {
      fill: ${({theme}) => theme.colorSecondary};
      transition: all 0.2s;
    }
  }
  .message {
    //border: 1px solid blue;
    text-align: center;
    padding: 10px 20px 15px;
    color: ${({theme}) => theme.colorSecondary};
    opacity: 0;
    transition: all 0.2s;
  }
  /*.body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    .icon {
      border: 1px solid blue;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70px;
      svg {
        fill: ${({theme}) => theme.colorSecondary};
        transition: all 0.2s;
      }
    }
    .message {
      text-align: center;
      padding: 10px 20px 30px;
      color: ${({theme}) => theme.colorSecondary};
      opacity: 0;
      transition: all 0.2s;
    }
  }*/
  
  &:hover {
    border: 1px solid ${({theme}) => theme.colorPrimary};
    box-shadow: 0 0 10px ${({theme}) => theme.colorSecondary};
    background-color: ${({theme}) => theme.colorWhite};
    /*.body {
      .icon {
        svg {
          fill: ${({theme}) => theme.colorPrimary};
        }
      }
      .message {
        color: ${({theme}) => theme.colorBlack};
        opacity: 1;
      }
    }*/
    .header {
      opacity: 1;
    }
    .icon {
      svg {
        fill: ${({theme}) => theme.colorPrimary};
      }
    }
    .message {
      color: ${({theme}) => theme.colorBlack};
      opacity: 1;
    }
  }
`;
export const StyledInfoCardLink = styled(StyledInfoCard)`
  text-decoration: none;
`;

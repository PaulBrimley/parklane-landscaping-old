import styled from 'styled-components';

const StyledInfoCard = styled.div`
  //margin: 21px;
  border: 1px solid ${({theme}) => theme.colorSecondary};
  box-shadow: 0 0 10px ${({theme}) => theme.colorTransparent};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: border 0.2s, box-shadow 0.2s;
  .body {
    flex: 1;
    .icons {
      display: flex;
      justify-content: center;
      position: relative;
      height: 70px;
      padding: 5px 0;
      img {
        transition: opacity 0.2s;
      }
      .icon1 {
        position: absolute;
        height: 100%;
        opacity: 1;
      }
      .icon2 {
        position: absolute;
        height: 100%;
        opacity: 0;
      }
    }
    .message {
      text-align: center;
      padding: 10px 20px 30px;
      color: ${({theme}) => theme.colorSecondary};
      transition: color 0.2s;
    }
  }
  .header {
    font-size: 1.2em;
    font-weight: 300;
    color: ${({theme}) => theme.colorWhite};
    text-transform: uppercase;
    padding: 10px 10px 9px;
    text-align: center;
    background-color: ${({theme}) => theme.colorPrimary};
    opacity: 0;
    transition: opacity 0.2s;
  }
  &:hover {
    border: 1px solid ${({theme}) => theme.colorPrimary};
    box-shadow: 0 0 10px ${({theme}) => theme.colorSecondary};
    .body {
      .icons {
        .icon1{
          opacity: 0;
        }
        .icon2{
          opacity: 1;
        }
      }
      .message {
        color: ${({theme}) => theme.colorBlack};
      }
    }
    .header {
      opacity: 1;
    }
  }
`;
export default StyledInfoCard;

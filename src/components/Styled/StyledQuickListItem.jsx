import styled from 'styled-components';

const StyledQuickListItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: color 0.2s;
  .icons {
    display: flex;
    justify-content: center;
    position: relative;
    height: 60px;
    padding: 5px 0;
    img {
      height: 100%;
      transition: opacity 0.2s;
    }
    .icon1 {
      position: absolute;
      opacity: 1;
    }
    .icon2 {
      position: absolute;
      opacity: 0;
    }
  }
  .title {
    font-size: 1.2em;
    font-weight: 700;
    color: ${({theme}) => theme.colorSecondary};
    text-transform: uppercase;
    padding: 2px 10px;
    text-align: center;
    transition: color 0.2s;
  }
  &:hover {
    .icons {
      .icon1{
        opacity: 0;
      }
      .icon2{
        opacity: 1;
      }
    }
    .title {
      color: ${({theme}) => theme.colorPrimary};
    }
  }
`;
export default StyledQuickListItem;

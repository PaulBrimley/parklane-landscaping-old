import styled from 'styled-components';

const StyledHeaderLinks = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  .link-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    .link-inner {
      padding: 0 4px;
      position: relative;
      border-bottom: 1px solid ${({theme}) => theme.colorWhiteOpaque};
      flex: 1;
      &:after {
        position: absolute;
        border-bottom: 4px solid ${({theme}) => theme.colorWhiteOpaque};
        content: '';
        display: block;
        margin-left: 49.9%;
        top: 105%;
        bottom: auto;
        left: 0;
        width: 1px;
        transition: top 0.2s, bottom 0.2s;
      }
      .link {
        display: block;
        text-align: center;
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
        transform: translateY(145%);
        transition: transform 0.2s;
      }
      &.active {
        &:after {
          top: auto;
          bottom: 0;
        }
        .link {
          font-weight: 500;
          transform: translateY(-20%);
        }
      }
    }
  }
`;
export default StyledHeaderLinks;

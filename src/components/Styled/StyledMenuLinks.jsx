import styled from 'styled-components';

const StyledMenuLinks = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  .link-inner {
    padding: 5px;
    .link {
      color: inherit;
      text-transform: uppercase;
      text-decoration: none;
      border-bottom: 1px solid ${({theme}) => theme.colorTransparent};
      &.active {
        border-bottom: 1px solid ${({theme}) => theme.colorWhiteOpaque};
      }
      .child-route {
        
      }
    }
  }
`;
export default StyledMenuLinks;

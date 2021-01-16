import styled from 'styled-components';

const StyledLinks = styled.div`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  justify-content: center;
  flex-wrap: wrap;
  .link {
    display: block;
    padding: 10px;
    margin: 0 5px;
    font-size: 1.4em;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    background-color: inherit;
    border-bottom: 2px solid ${({ theme }) => theme.colorTransparent};
    transition: color 0.2s, background-color 0.2s, border-bottom-color 0.2s;
    &:hover, &.active {
      color: ${({ theme }) => theme.colorSecondary};
      border-bottom: 2px solid ${({ theme }) => theme.colorSecondary};
    }
  }
`;
export default StyledLinks;

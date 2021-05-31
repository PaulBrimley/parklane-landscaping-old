import styled from 'styled-components';

/** context **/
import { images } from '../../context/img.context';

/** images **/
const { logoMain2 } = images;

function LogoStripe() {
  return (
    <StyledLogoStripe>
      <img src={logoMain2} alt="logo" />
    </StyledLogoStripe>
  );
}
const StyledLogoStripe = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 100px;
    object-fit: contain;
    object-position: center;
  }
`;
export default LogoStripe;

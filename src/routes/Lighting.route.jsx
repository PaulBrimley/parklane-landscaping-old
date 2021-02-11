import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
import imgLighting1 from '../assets/img/img-lighting-1.jpg';
import imgLighting2 from '../assets/img/img-lighting-2.jpg';
import imgLighting3 from '../assets/img/img-lighting-3.jpg';

function ServicesLightingRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 15;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 400) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '100%';
    if (width < 800) size = '130%';
    if (width < 700) size = '150%';
    if (width < 600) size = '175%';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesLighting className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgLighting1})`,
            backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: calcBackgroundSize()
          }}
          config={{
            height: '350px'
          }}
          slotLeft={
            <InfoBannerLeft
              className="info-banner-left"
              message={
                <StyledInfoBannerMessage>
                  <div className="title">
                    <div>
                      <span className="isBold">HOA</span>
                    </div>
                    <div>LIGHTING</div>
                  </div>
                  <div className="hr" />
                  <div className="message">
                    <div>Celebrating A Decade</div>
                    <div>Specializing in HOA Landscapes</div>
                  </div>
                </StyledInfoBannerMessage>
              }
            />
          }
        />

        <PageDivider1 />

        <div className="services-lighting-header">HOA LIGHTING</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          Your community is your pride and joy. Once Parklane has planted flower beds, trees and added beautiful landscape features, you'll want to showcase them. Adding landscape lighting and garden lights is a great way to highlight your community's best features and make your HOA a safer place. Plus it raises the value of any community. Consider adding outdoor lighting for your next landscape project to make your HOA warm and inviting.
        </StyledInfoBodyMessage>

        <div className="services-lighting-info-subsection">
          <div className="subsection-images">
            <img src={imgLighting2} alt="lighting 2" />
            <img src={imgLighting3} alt="lighting 3" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              If you are looking to start a new HOA community landscape project, consider the value of adding outdoor lighting. A well-lit neighborhood increases curb appeal by offering a warm and inviting place for your family and friends. Not only does outdoor lighting extend your living space, it can offer huge safety and security benefits. Highlight your HOA's beautiful lawns, gardens, and other landscaping features with outdoor lighting!
            </StyledInfoBodyMessage>
            <br/>
            <br/>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              For more information on HOA landscape lighting or tips on how you can enhance your landscape community at night, contact us today! We would be happy to provide you with a free estimate on your next landscaping project.
            </StyledInfoBodyMessage>
          </div>
        </div>

      </StyledServicesLighting>
    </AnimatedStyledRoute>
  );
}
const StyledServicesLighting = styled.div`
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-lighting-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .services-lighting-info-subsection {
    display: flex;
    margin: 10px 130px;
    .subsection-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 50% 0 0;
      img {
        margin-bottom: 10px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 170px;
      }
    }
    .subsection-info {
      flex: 50% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {

  }
`;
export default ServicesLightingRoute;

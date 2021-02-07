import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import InfoBannerRight from '../components/Molecules/InfoBannerRight';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
import imgEstatesAtBridgewood from '../assets/img/img-estates-at-bridgewood.jpg';
import imgPictureFrame from '../assets/img/img-picture-frame.png';

function ServicesLandscapeRoute(props) {
  const { isMobile } = useAppState();
  return (
    <AnimatedStyledRoute>
      <StyledServicesLandscape className="body">
        <InfoBanner
          config={{
            backgroundPosition: {
              xPercent: 0,
              yPixels: isMobile ? -50 : -70
            },
            backgroundSize: isMobile ? 110 : 70,
            backgroundUrl: imgEstatesAtBridgewood,
            height: '350px',
            rightGradientCover: isMobile ? null : 'linear-gradient(120deg, transparent 0%, transparent 50%, white 50%, white 100%)'
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
                    <div>LANDSCAPE</div>
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
          slotRight={
            <InfoBannerRight className="info-banner-right">
              <img className="picture-frame" src={imgPictureFrame} alt="picture frame" />
            </InfoBannerRight>
          }
        />

        <PageDivider1 />

        <div className="services-landscape-header">HOA Landscape</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 100px">

        </StyledInfoBodyMessage>


      </StyledServicesLandscape>
    </AnimatedStyledRoute>
  );
}
const StyledServicesLandscape = styled.div`
  .services-landscape-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 100px 10px;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .info-banner-right {
    padding: 30px 0;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .picture-frame {
      width: 80%;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    .info-banner-right {
      display: none;
    }
  }
`;
export default ServicesLandscapeRoute;

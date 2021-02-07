import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
import imgEstatesAtBridgewood from '../assets/img/img-estates-at-bridgewood.jpg';

function ServicesFenceRoute(props) {
  const { isMobile } = useAppState();
  return (
    <AnimatedStyledRoute>
      <StyledServicesFence className="body">
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
                    <div>FENCE REPAIR</div>
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

        <div className="services-fence-header">HOA FENCE REPAIR</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 100px">

        </StyledInfoBodyMessage>


      </StyledServicesFence>
    </AnimatedStyledRoute>
  );
}
const StyledServicesFence = styled.div`
  .services-fence-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 100px 10px;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    
  }
`;
export default ServicesFenceRoute;

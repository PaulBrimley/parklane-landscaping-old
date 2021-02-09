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
import imgEstatesAtBridgewood from '../assets/img/img-estates-at-bridgewood.jpg';

function ServicesTrimmingRoute(props) {
  const { isMobile, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 100 - (width / 800 * 100) + 10;
    return offset;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesTrimming className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgEstatesAtBridgewood})`,
            backgroundPosition: `left calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: width < 750 ? '750px' : '70%'
          }}
          config={{
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
                    <div>TREE TRIMMING</div>
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

        <div className="services-trimming-header">HOA TREE TRIMMING</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 100px">

        </StyledInfoBodyMessage>


      </StyledServicesTrimming>
    </AnimatedStyledRoute>
  );
}
const StyledServicesTrimming = styled.div`
  .services-trimming-header {
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
export default ServicesTrimmingRoute;

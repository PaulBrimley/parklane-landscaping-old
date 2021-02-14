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
import imgIrrigationSeal from '../assets/img/img-irrigation-seal.png';
import imgSprinklers1 from '../assets/img/img-sprinklers-1.jpg';
import imgSprinklers2 from '../assets/img/img-sprinklers-2.jpg';

function ServicesIrrigationRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 40;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 400) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '110%';
    if (width < 800) size = '130%';
    if (width < 700) size = '150%';
    if (width < 600) size = '175%';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesIrrigation className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgSprinklers1})`,
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
                    <div>IRRIGATION</div>
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

        <div className="services-irrigation-header">HOA Irrigation</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          During our ten years in business, Parklane has recognized the need for licensed irrigators in the HOA industry. After being asked if we could do SAWS audits or repair an irrigation system we decided to invest in educating our own team members in irrigation. As a result, Parkland now has three licensed irrigators who regularly perform monthly audits on all of our HOA properties. When the need arises, our licensed irrigators can repair or even install an entire irrigation system.
        </StyledInfoBodyMessage>

        <div className="services-irrigation-info-images">
          <img src={imgSprinklers2} alt="sprinklers" />
        </div>

        <div className="services-irrigation-info-seal">
          <img src={imgIrrigationSeal} alt="irrigation seal" />
          <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 15px">
            Does your irrigator have this seal? Parklane Landscaping does. In fact we have a team of licensed irrigators that all carry their irrigation license with this official seal. it is a requirement in the state of Texas that all licensed irrigators doing audits or working on irrigation carry it with them at all times. If you need a licensed irrigator call Parklane Landscaping. Our team has Texas' seal of approval!
          </StyledInfoBodyMessage>
        </div>

      </StyledServicesIrrigation>
    </AnimatedStyledRoute>
  );
}
const StyledServicesIrrigation = styled.div`
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-irrigation-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .services-irrigation-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 20px 130px;
    img {
      flex: 1 1 auto;
      width: 100%;
    }
  }
  .services-irrigation-info-seal {
    display: flex;
    margin: 30px 130px;
    img {
      width: 110px;
      object-fit: contain;
      object-position: center;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    
  }
`;
export default ServicesIrrigationRoute;

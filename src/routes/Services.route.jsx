import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';
import { images } from '../context/img.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';

/** routes **/
import { routes } from './Routes';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import ParallaxStripe from '../components/Atoms/ParallaxStripe';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import StyledQuickListItem from '../components/Styled/StyledQuickListItem';
import SVGIcon from '../components/Atoms/SVGIcon';

/** images **/
const {
  imgGuyKneeling,
  imgGuyPlanting2,
  imgGuyTeaching,
  imgHillsAtAlamoRanch,
  imgHome,
  logoMain
} = images;

function ServicesRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let strength = -0.02;
    if (width < 750) strength = 0.2;
    if (width < 600) strength = 0.4;
    if (width < 400) strength = 0.6;
    if (width < 350) strength = 0.7;
    return width * strength - 350;
  }
  function calcBackgroundSize() {
    let size = '160%';
    if (width < 500) size = '800px';
    if (width < 400) size = '600px';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServices className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgGuyPlanting2})`,
            backgroundPosition: `0 calc(${calcBackgroundPosition()}px + ${offset.y}px)`,
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
                      THE <span className="isBold">HOA</span>
                    </div>
                    <div className="isBold">LANDSCAPE</div>
                    <div>SPECIALISTS</div>
                  </div>
                  <div className="hr" />
                  <div className="message">
                    <div>The beauty of maintaining HOA</div>
                    <div>community is in the details.</div>
                  </div>
                </StyledInfoBannerMessage>
              }
            />
          }
        />

        <PageDivider1 />

        <br />
        <br />

        <div className="services-header uppercase">Parklane HOA Services</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          A partnership with Parklane Landscaping begins the moment we step foot onto an HOA community. As part of our growing relationship, Parklane works diligently with property managers to ensure proactivity in landscape areas that would benefit from enhancement while also trying to save money for the community. We strive to work closely with HOA landscape committees in developing ideas, concepts and plans to actively engage the future development of the entire neighborhood. As a courtesy, we make ourselves available to attend annual HOA board meetings and prepare short yet informative presentations detailing ongoing progress. Below you will find a list of services we offer to ensure our HOA communities need only make one call to fulfill all their landscaping needs.
        </StyledInfoBodyMessage>

        <br />
        <br />
        <br />

        <div className="services-info-images">
          <img src={imgGuyKneeling} alt="Guy kneeling" />
          <img src={imgHillsAtAlamoRanch} alt="Hills at Alamo Ranch" />
          <img src={imgGuyTeaching} alt="Guy teaching" />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="services-header-2">Click on any icon in the quick-list of services in the box below to find out more</div>

        <br />
        <br />
        <br />

        <div className="services-quick-list-wrapper">
          <div className="services-quick-list">
            <StyledQuickListItem to={routes.MAINTENANCE}>
              <div className="icon">
                <SVGIcon height="70px" width="70px" type="lawnMower"/>
              </div>
              <div className="title">HOA Maintenance</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.IRRIGATION}>
              <div className="icon">
                <SVGIcon height="65px" width="65px" type="hose" style={{marginTop: '3px'}}/>
              </div>
              <div className="title">HOA Irrigation</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.LANDSCAPE}>
              <div className="icon">
                <SVGIcon height="73px" width="73px" type="landscape"/>
              </div>
              <div className="title">HOA Landscaping</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.MONUMENT}>
              <div className="icon">
                <SVGIcon height="80px" width="80px" type="monument"/>
              </div>
              <div className="title">Monument Installation</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.MONUMENT_REPAIR}>
              <div className="icon">
                <SVGIcon height="80px" width="80px" type="masonry"/>
              </div>
              <div className="title">Monument Repair</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.FENCE}>
              <div className="icon">
                <SVGIcon height="68px" width="68px" type="fence" style={{marginTop: '4px'}}/>
              </div>
              <div className="title">Fence Installation</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.LIGHTING}>
              <div className="icon">
                <SVGIcon height="53px" width="53px" type="lightBulb" style={{marginTop: '8px'}}/>
              </div>
              <div className="title">HOA Landscape Lighting</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.TRIMMING}>
              <div className="icon">
                <SVGIcon height="70px" width="70px" type="trees" style={{marginTop: '3px'}}/>
              </div>
              <div className="title">Tree Maintenance</div>
            </StyledQuickListItem>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <ParallaxStripe backgroundUrl={imgHome} height="75px" parallaxStart="400">
          <div className="home-stripe">
            <img className="logo" src={logoMain} alt="logo" />
          </div>
        </ParallaxStripe>

        <br />
        <br />
        <br />
        <br />

        <div className="services-header-2">Parklane HOA Services</div>
        <br />
        <div className="services-hoa-services-list">
          <div>Specialists in HOA Common Areas</div>
          <div>General Ground Maintenance</div>
          <div>TCEQ Licensed Irrigation Auditing, Maintenance & Repair</div>
          <div>Annual SAWS Reporting</div>
          <div>Backflow Assembly Testing & Reporting</div>
          <div>Winter Rye Seeding</div>
          <div>Landscape Design & Renovation</div>
          <div>Tree Pruning, Shaping & Installation</div>
          <div>Turf Grass Installation & Maintenance</div>
          <div>Mulch Installation</div>
          <div>Annuals & Perennials Installation</div>
          <div>Landscape & Entry Monument Lighting, Auditing & Repair</div>
          <div>Certified Kiddie Cushion Installation</div>
          <div>Monthly Reporting</div>
          <div>Organic Fertilization</div>
          <div>Stone Masonry Installation & Repair</div>
          <div>Wood Fence Installation & Repair</div>
          <div>Weed Control & Herbicide Management Programs</div>
          <div>Drainage, Easement, Field & Fence Line Shredding</div>
          <div>HOA Annual & Board Meeting Participation</div>
        </div>
      </StyledServices>
    </AnimatedStyledRoute>
  );
}
const StyledServices = styled.div`
  padding-bottom: 90px;
  .home-stripe {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(120deg, transparent 0, transparent 30%, rgba(255, 0, 40, 0.85) 30%, rgba(255, 0, 40, 0.85) 70%, transparent 70%, transparent 100%);
    .logo {
      max-width: 150px;
      margin: 10px 0 15px;
    }
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .services-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .services-header-2 {
    font-size: 1.3em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin: 10px var(--side-margin);
  }
  .services-hoa-services-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 var(--side-margin);
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    white-space: nowrap;
    div {
      margin-bottom: 10px;
    }
  }
  .services-info-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    margin: 5px var(--side-margin) 10px;
    img {
      flex: 0 1 auto;
      width: 100%;
      max-width: 300px;
    }
  }
  .services-quick-list-wrapper {
    margin: 5px var(--side-margin) 10px;
    padding: 3px;
    border: 2px solid ${({ theme }) => theme.colorPrimary};
    .services-quick-list {
      padding: 10px;
      border: 2px solid ${({ theme }) => theme.colorPrimary};
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  @media (max-width: 900px) {
    .services-hoa-services-list {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .services-hoa-services-list {
      margin: 0 20px 50px;
      white-space: normal;
    }
  }
`;
export default ServicesRoute;

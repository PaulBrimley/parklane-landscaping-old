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
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import StyledQuickListItem from '../components/Styled/StyledQuickListItem';

/** images **/
const { iconFenceGold, iconFenceRed, iconLawnMowerGold, iconLawnMowerRed, iconLightBulbGold, iconLightBulbRed, iconMasonGold, iconMasonRed, iconMasonryGold, iconMasonryRed, iconTreeWalkGold, iconTreeWalkRed, iconWaterHoseGold, iconWaterHoseRed, imgGuyKneeling, imgGuyPlanting2, imgGuyTeaching, imgHillsAtAlamoRanch } = images;

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
            backgroundGradient: 'linear-gradient(120deg, rgb(255, 0, 40) 0%, rgb(255, 0, 40) 50%, transparent 50%, transparent 100%)',
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

        <div className="services-header">Parklane HOA Services</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          A partnership with Parklane Landscaping begins the moment we begin caring for your HOA community landscape. As part of our growing relationship, Parklane works diligently with property managers to ensure pro-activity in areas that would benefit from enhancement and those that can be money savers for the HOA. We also work with HOA landscape committees in developing ideas, concepts and plans to actively engage the future development of the community’s landscape. We make ourselves available to attend annual HOA board meetings and prepare short and informative presentations detailing our ongoing progress. Below you will find a list of general services we offer to ensure our HOA communities need only make one call to fulfill all their landscaping needs.
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

        <div className="services-header-2">Click on any icon in the quick-list of services in the box below to find out more</div>

        <br />

        <div className="services-quick-list-wrapper">
          <div className="services-quick-list">
            <StyledQuickListItem to={routes.MAINTENANCE}>
              <div className="icons">
                <img className="icon1" src={iconLawnMowerGold} alt="lawn mower" />
                <img className="icon2" src={iconLawnMowerRed} alt="lawn mower" />
              </div>
              <div className="title">HOA Maintenance</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.IRRIGATION}>
              <div className="icons">
                <img className="icon1" src={iconWaterHoseGold} alt="water hose" />
                <img className="icon2" src={iconWaterHoseRed} alt="water hose" />
              </div>
              <div className="title">HOA Irrigation</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.LANDSCAPE}>
              <div className="icons">
                <img className="icon1" src={iconTreeWalkGold} alt="tree walk" />
                <img className="icon2" src={iconTreeWalkRed} alt="tree walk" />
              </div>
              <div className="title">HOA Landscape</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.MONUMENT}>
              <div className="icons">
                <img className="icon1" src={iconMasonGold} alt="mason" />
                <img className="icon2" src={iconMasonRed} alt="mason" />
              </div>
              <div className="title">HOA Monuments</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.MONUMENT}>
              <div className="icons">
                <img className="icon1" src={iconMasonryGold} alt="masonry" />
                <img className="icon2" src={iconMasonryRed} alt="masonry" />
              </div>
              <div className="title">Masonry Repair</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.FENCE}>
              <div className="icons">
                <img className="icon1" src={iconFenceGold} alt="fence" />
                <img className="icon2" src={iconFenceRed} alt="fence" />
              </div>
              <div className="title">Fence Repair</div>
            </StyledQuickListItem>

            <StyledQuickListItem to={routes.LIGHTING}>
              <div className="icons">
                <img className="icon1" src={iconLightBulbGold} alt="light bulb" />
                <img className="icon2" src={iconLightBulbRed} alt="light bulb" />
              </div>
              <div className="title">HOA Lighting</div>
            </StyledQuickListItem>
          </div>
        </div>

        <br />
        <br />

        <div className="services-header-2">All HOA Services</div>
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
          <div>Stone Masonry Installation and Repair</div>
          <div>Wood Fence Installation and Repair</div>
          <div>Weed Fence Installation and Repair</div>
          <div>Weed Control and Herbicide Management Programs</div>
          <div>Drainage, Easement, Field and</div>
          <div>Fence Line Shredding</div>
          <div>HOA Annual and Board Meeting Participation</div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </StyledServices>
    </AnimatedStyledRoute>
  );
}
const StyledServices = styled.div`
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .services-header-2 {
    font-size: 1.7em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin: 10px var(--side-margin);
  }
  .services-hoa-services-list {
    font-size: 1.5em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin: 20px var(--side-margin);
    div {
      margin: 6px 0;
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
`;
export default ServicesRoute;

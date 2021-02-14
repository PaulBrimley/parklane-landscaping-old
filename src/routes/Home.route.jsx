import { Link } from 'react-router-dom';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect';

/** routes **/
import { routes } from './Routes';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import { LinkButton } from '../components/Atoms/Button';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import InfoBannerRight from '../components/Molecules/InfoBannerRight';
import PageDivider1 from '../components/Atoms/PageDivider1';
import ParallaxStripe from '../components/Atoms/ParallaxStripe';
import StyledInfoBannerAction from '../components/Styled/StyledInfoBannerAction';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import { StyledInfoCard, StyledInfoCardLink } from '../components/Styled/StyledInfoCard';

/** images **/
import iconLawnMowerGold from '../assets/img/icon-lawn-mower-gold.png';
import iconLawnMowerRed from '../assets/img/icon-lawn-mower-red.png';
import iconMasonGold from '../assets/img/icon-mason-gold.png';
import iconMasonRed from '../assets/img/icon-mason-red.png';
import iconTreeWalkGold from '../assets/img/icon-tree-walk-gold.png';
import iconTreeWalkRed from '../assets/img/icon-tree-walk-red.png';
import iconWaterHoseGold from '../assets/img/icon-water-hose-gold.png';
import iconWaterHoseRed from '../assets/img/icon-water-hose-red.png';
import imgGrass from '../assets/img/img-grass.jpg';
import imgHome from '../assets/img/img-home.jpg';
import logoAnniversary from '../assets/img/logo-anniversary.png';
import logoMain from '../assets/img/logo-main.png';

function HomeRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function handleSubmit() {
    // console.log('clicked');
  }

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 100 - (width / 800) * 100 + 10;
    return offset;
  }

  return (
    <AnimatedStyledRoute>
      <StyledHome className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgHome})`,
            backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: width < 500 ? '500px' : 'cover'
          }}
          config={{
            height: '350px'
          }}
          slotLeft={
            <InfoBannerLeft
              action={
                <StyledInfoBannerAction>
                  <LinkButton classes="learn-more-button-1" fontSize="0.8em" fontWeight="400" padding="12px 20px 11px" shadowColor="colorTransparent" to={routes.SERVICES}>
                    LEARN MORE
                  </LinkButton>
                </StyledInfoBannerAction>
              }
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
                    <div>Celebrating A Decade</div>
                    <div>Specializing in HOA Landscapes</div>
                  </div>
                </StyledInfoBannerMessage>
              }
            />
          }
          slotRight={
            <InfoBannerRight className="info-banner-right">
              <img className="anniversary-logo" src={logoAnniversary} alt="anniversary logo" />
            </InfoBannerRight>
          }
        />

        <PageDivider1 />

        <div className="home-header">The HOA Landscape Specialists</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          Parklane Landscaping is a professional landscape management firm specializing in HOA managed properties in San Antonio, Boerne, and Braunfels, Having been in business now for ten years, we have developed a reputation for excellent client service an detailed attention to our work, We encourage our team to foster close relationships with HOA board members and property managers. This close collaboration yields high performance in our crews that ensures a community's visual aesthetic appeal and the strategic enhancement of its property value.
        </StyledInfoBodyMessage>

        <div className="home-action">
          <LinkButton classes="learn-more-button-2" fontSize="1.3em" margin="25px 0 0" padding="8px 20px 5px" to={routes.SERVICES}>
            LEARN MORE
          </LinkButton>
        </div>

        <ParallaxStripe backgroundUrl={imgGrass} height="75px">
          <div className="grass-stripe">
            <img className="logo" src={logoMain} alt="logo" />
          </div>
        </ParallaxStripe>

        <div className="home-info-section">
          <StyledInfoCardLink as={Link} to={routes.MAINTENANCE}>
            <div className="header">Maintenance</div>
            <div className="body">
              <div className="icons">
                <img className="icon1" src={iconLawnMowerGold} alt="lawn mower" />
                <img className="icon2" src={iconLawnMowerRed} alt="lawn mower" />
              </div>
              <div className="message">Parklane Landscaping specializes in HOA landscape maintenance...Learn More</div>
            </div>
          </StyledInfoCardLink>

          <StyledInfoCardLink as={Link} to={routes.IRRIGATION}>
            <div className="header">Irrigation</div>
            <div className="body">
              <div className="icons">
                <img className="icon1" src={iconWaterHoseGold} alt="water hose" />
                <img className="icon2" src={iconWaterHoseRed} alt="water hose" />
              </div>
              <div className="message">After many requests for irrigation audits, licensing became essential...Learn More</div>
            </div>
          </StyledInfoCardLink>

          <StyledInfoCardLink as={Link} to={routes.LANDSCAPE}>
            <div className="header">HOA Landscaping</div>
            <div className="body">
              <div className="icons">
                <img className="icon1" src={iconTreeWalkGold} alt="tree walk" />
                <img className="icon2" src={iconTreeWalkRed} alt="tree walk" />
              </div>
              <div className="message">Parklane takes every opportunity to expand its landscaping abilities...Learn More</div>
            </div>
          </StyledInfoCardLink>

          <StyledInfoCardLink as={Link} to={routes.MONUMENT}>
            <div className="header">Masonry</div>
            <div className="body">
              <div className="icons">
                <img className="icon1" src={iconMasonGold} alt="mason" />
                <img className="icon2" src={iconMasonRed} alt="mason" />
              </div>
              <div className="message">Masonry is a very important service to every HOA community...Learn More</div>
            </div>
          </StyledInfoCardLink>
        </div>
      </StyledHome>
    </AnimatedStyledRoute>
  );
}
const StyledHome = styled.div`
  .grass-stripe {
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
  .home-action {
    display: flex;
    justify-content: center;
    margin: 0 var(--side-margin) 30px;
    .learn-more-button-2 {
      color: ${({ theme }) => theme.colorWhite};
      border: 1px solid ${({ theme }) => theme.colorPrimary};
      background: ${({ theme }) => theme.colorPrimary};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colorSecondary};
        background: ${({ theme }) => theme.colorSecondary};
      }
    }
  }
  .home-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .home-info-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 100px 20px;
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
    .anniversary-logo {
      width: 80%;
      max-width: 400px;
    }
  }
  .learn-more-button-1 {
    color: ${({ theme }) => theme.colorWhite};
    border: 1px solid ${({ theme }) => theme.colorWhiteOpaque};
    &:hover {
      color: ${({ theme }) => theme.colorSecondary};
      border: 1px solid ${({ theme }) => theme.colorSecondary};
    }
  }
  @media (max-width: 600px) {
    .home-info-section {
      grid-template-columns: repeat(2, 1fr);
      padding: 100px var(--side-margin);
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .home-header {
      font-size: 2em;
      margin: 20px;
    }
    .home-info-section {
      grid-template-columns: 1fr;
      padding: 20px;
    }
    .info-banner-right {
      display: none;
    }
  }
  
`;
export default HomeRoute;

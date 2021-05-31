import { Link } from 'react-router-dom';
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
import { LinkButton } from '../components/Atoms/Button';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import InfoBannerRight from '../components/Molecules/InfoBannerRight';
import PageDivider1 from '../components/Atoms/PageDivider1';
import ServiceGuide from '../components/Molecules/ServiceGuide';
import StyledInfoBannerAction from '../components/Styled/StyledInfoBannerAction';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import { StyledInfoCardLink } from '../components/Styled/StyledInfoCard';
import SVGIcon from '../components/Atoms/SVGIcon';
import WeatherIcon from '../components/Atoms/Icons/WeatherIcon';

/** images **/
const { imgGrass, imgHome, logoAnniversary, logoMain2 } = images;

function HomeRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

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
            <InfoBannerRight className="info-banner-right" config={{ friction: 70 }}>
              <img className="anniversary-logo" src={logoAnniversary} alt="anniversary logo" />
            </InfoBannerRight>
          }
        >
          <a className="weather-link" href="https://weather.com/weather/today/l/0e23ddb22586163323dc8c95e1ca5a3d43e9d736052ec6a368233a2897f36cad" target="_blank">
            <WeatherIcon />
          </a>
        </InfoBanner>

        <PageDivider1 />

        <img className="home-anniversary-logo" src={logoAnniversary} />

        <br />
        <br />

        <div className="home-header uppercase">The HOA Landscape Specialists</div>

        <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
          Parklane Landscaping is a professional landscape company specializing in the landscape maintenance and irrigation management for HOA communities in San Antonio, Boerne, New Braunfels and surrounding municipalities.
        </StyledInfoBodyMessage>

        <StyledInfoBodyMessage fontSize="1.6em" margin="15px var(--side-margin)">
          With a reputation for excellent client service and professional attention to the landscape care of its properties, Parklane Landscaping works with HOA boards, property management companies and housing developers in the care and enhancement of HOA communities and their landscaped common areas (entry monuments, parkways, amenity centers, parks, green belts, fence lines, drainage easement, etc.).
        </StyledInfoBodyMessage>

        <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
          For over 10 years, Parklane Landscaping has served the special needs of HOA communities as a full service landscape firm and remains the only landscaping company to specialize in the preservation and enhancement of an HOA communities’ landscape infrastructure and investment.
        </StyledInfoBodyMessage>

        <br />
        <br />
        <br />
        <br />

        <div className="logo-separator">
          <img src={logoMain2} alt="logo" />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <ServiceGuide />

      </StyledHome>
    </AnimatedStyledRoute>
  );
}
const StyledHome = styled.div`
  padding-bottom: 100px;
  .home-action {
    display: flex;
    justify-content: center;
    margin: 0 var(--side-margin) 30px;
    .learn-more-button-2 {
      color: ${({ theme }) => theme.colorWhite};
      border: 1px solid ${({ theme }) => theme.colorSecondary};
      background: ${({ theme }) => theme.colorSecondary};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colorPrimary};
        background: ${({ theme }) => theme.colorPrimary};
      }
    }
  }
  .home-anniversary-logo {
    display: none;
    width: 50%;
    margin: 10px var(--side-margin) 0;
  }
  .home-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .home-header-2 {
    font-size: 2.7em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .home-info-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 100px 20px 0;
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
  .logo-separator {
    display: flex;
    justify-content: center;
    img {
      height: 100px;
      object-fit: contain;
      object-position: center;
    }
  }
  .weather-link {
    position: absolute;
    svg {
      fill: ${({ theme }) => theme.colorSecondary};
      transition: all 0.2s;
    }
    &:hover {
      svg {
        fill: ${({ theme }) => theme.colorQuaternary};
      }
    }
  }
  @media (max-width: 600px) {
    .home-info-section {
      grid-template-columns: repeat(2, 1fr);
      padding: 100px var(--side-margin);
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .home-anniversary-logo {
      display: block;
    }
    .home-header {
      font-size: 2em;
      margin: 20px;
    }
    .home-header-2 {
      font-size: 1.6em;
      margin: 20px 20px 10px;
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

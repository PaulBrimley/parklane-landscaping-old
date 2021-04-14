import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';
import { images } from '../context/img.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import InfoBannerRight from '../components/Molecules/InfoBannerRight';
import PageDivider1 from '../components/Atoms/PageDivider1';
import ParallaxStripe from '../components/Atoms/ParallaxStripe';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
const {
  imgCarnival,
  imgMonument6,
  imgParklaneFamily,
  imgPictureFrame,
  imgTrees2,
  logoMain
} = images;

function AboutRoute(props) {
  const { isMobile, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundSize() {
    let size = '700px';
    if (width < 700) size = '750px';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledAbout className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgMonument6})`,
            backgroundPosition: `left calc(-20px + ${offset.y}px)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: calcBackgroundSize()
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
                      THE <span className="isBold">HOA</span>
                    </div>
                    <div className="isBold">LANDSCAPE</div>
                    <div>SPECIALISTS</div>
                  </div>
                  <div className="hr" />
                  <div className="message">
                    <div>Serving San Antonio's HOA</div>
                    <div>communities for 10 years!</div>
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

        <br />
        <br />

        <div className="about-header uppercase">About</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          A partnership with Parklane Landscaping begins the moment we begin caring for your HOA community landscape. As part of our growing relationship, Parklane works diligently with property managers to ensure proactivity in areas that would benefit from enhancement and those that can be money savers for the HOA. We also work with HOA landscape committees in developing ideas, concepts and plans to actively engage the future development of the community’s landscape. We make ourselves available to attend annual HOA board meetings and prepare short and informative presentations detailing our ongoing progress.
        </StyledInfoBodyMessage>

        <br />
        <br />
        <br />
        <br />
        <br />

        <ParallaxStripe backgroundUrl={imgTrees2} height="75px" offsetAdjust="-220" parallaxStart="100" >
          <div className="tree-stripe">
            <img
              className="logo"
              src={logoMain}
              alt="logo"
            />
          </div>
        </ParallaxStripe>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="about-header">Community Manager Partnership 24/7</div>
        <div className="about-info-images">
          <img src={imgMonument6} alt="Estates at Bridgewood" />
          <img src={imgParklaneFamily} alt="Parklane family" />
          <img src={imgCarnival} alt="Carnival" />
        </div>
        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          Our account representatives keep in constant contact with the property’s HOA community manager. In case of emergency or urgent care notices, our teams are available 24/7 to address emergency needs that arise from time to time. Our irrigators are also on call to address broken pipes, misfiring sprinkler heads and any other irrigation related issues that arise outside of normal business hours.
        </StyledInfoBodyMessage>
      </StyledAbout>
    </AnimatedStyledRoute>
  );
}
const StyledAbout = styled.div`
  padding-bottom: 90px;
  .about-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .about-info-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 5px var(--side-margin) 10px;
    img {
      flex: 0 1 auto;
      width: 100%;
      max-width: 300px;
    }
  }
  .tree-stripe {
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
    .about-header {
      font-size: 2em;
      margin: 20px;
    }
    .about-info-images {
      grid-template-columns: 1fr;
      margin: 5px var(--side-margin) 10px;
      img {
        max-width: none;
      }
    }
    .info-banner-right {
      display: none;
    }
  }
`;
export default AboutRoute;

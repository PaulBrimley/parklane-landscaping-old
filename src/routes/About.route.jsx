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

        <div className="about-header">About</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          <p>
            Parklane Landscaping was formed in 2011, after owner, Eliseo Rios recognized a rapid growth in the number of gated housing developments in and around the San Antonio area. Realizing that there were no specialized landscapers that served these communities, his mission became clear. Parklane had to become the specialists in the HOA industry.
          </p>
          <p>
            Now as we celebrate our tenth year in business, Parklane has learned all the particulars that come with servicing HOA communities. Many moving parts are needed to properly maintain large housing developments. Aside from the normal services one would expect from a commercial landscaper Parklane’s service menu also includes: masonry repair, entryway monument design, landscape design and installation, lighting design and installation, licensed irrigation and much more. We strive to go out of our way to offer as many services possible under the name Parklane. This builds trust and confidence with our communities knowing that all their landscaping needs can be met with one call. At Parklane we value our clients and offering the most efficient and quality solutions is our goal.
          </p>
        </StyledInfoBodyMessage>

        <ParallaxStripe backgroundUrl={imgTrees2} height="75px">
          <div className="tree-stripe">
            <img
              className="logo"
              src={logoMain}
              alt="logo"
            />
          </div>
        </ParallaxStripe>

        <div className="about-header">Keeping It In The Community</div>
        <div className="about-info-images">
          <img src={imgMonument6} alt="Estates at Bridgewood" />
          <img src={imgParklaneFamily} alt="Parklane family" />
          <img src={imgCarnival} alt="Carnival" />
        </div>
        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          After delving into a relatively untouched niche and building a thriving business around it, Parklane became one if the industry’s early pioneers. As a result demand for Parklane grew, and with it the need for more help. Knowing his family’s great work ethic, owner Eliseo Rios approached his brothers to join the company, transitioning Parklane into a family run business. It is hard to find a family business where every member has a college degree including Momma Rios. More than that they all live in the community they serve. After years of building relationships of trust and learning specific skills to effectively serve clients, Parklane has gained the reputation of being the experts in the HOA industry. We feel great pride in the work we do.  and look forward to future growth. There is nothing better than hearing from a client the pride a resident feels when they enter their beautiful community maintained by Parklane Landscaping.
        </StyledInfoBodyMessage>

        <br/>
        <br/>
        <br/>
        <br/>

      </StyledAbout>
    </AnimatedStyledRoute>
  );
}
const StyledAbout = styled.div`
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

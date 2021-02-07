import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

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
import imgCarnival from '../assets/img/img-carnival.jpg';
import imgEstatesAtBridgewood from '../assets/img/img-estates-at-bridgewood.jpg';
import imgParklaneFamily from '../assets/img/img-parklane-family.jpg';
import imgPictureFrame from '../assets/img/img-picture-frame.png';
import imgTrees from '../assets/img/img-trees.jpg';
import logoMain from '../assets/img/logo-main.png';

function AboutRoute(props) {
  const { isMobile } = useAppState();
  return (
    <AnimatedStyledRoute>
      <StyledAbout className="body">
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

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 100px">
          <p>
            In 2011 Eliseo Rios opened Parklane Landscaping. He recognized the rapid growth in the number of housing developments in and around San Antonio. He also noticed that there were no specialized landscapers that served these communities. It was then that he made the goal to make Parklane specialists in the HOA landscaping industry.
          </p>
          <p>
            Now as they celebrate their tenth year in business, Parklane has learned all of the ins and outs of servicing HOA communities. There were many key elements needed in order to properly maintain these large housing developments. Aside from the normal services one would expect from a commercial landscaper, Parklane's service menu also includes landscape design and installation, lighting design and installation, licensed irrigation, masonry repair, entryway monument design, and much more. Parklane goes out of their way to offer as many services as they can. This allows clients the ability to solve any landscaping or irrigation problem that may arise in their community. Parklane values their clients which is why finding the most efficient and cost effective solutions is a priority.
          </p>
        </StyledInfoBodyMessage>


        <ParallaxStripe backgroundUrl={imgTrees}>
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
          <img src={imgEstatesAtBridgewood} alt="Estates at Bridgewood" />
          <img src={imgParklaneFamily} alt="Parklane family" />
          <img src={imgCarnival} alt="Carnival" />
        </div>
        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 100px">
          Ten yeas ago Parklane saw an opportunity to delve into a relatively new industry, maintenance in HOA communities. By building its business around it they have become one of the industry's early pioneers. After a few years, owner Eliseo Rios brought in his brothers making it a family run business. It is hard to find a family business where every family member has a degree. More than that, they live in the community they serve. Through years of hard work, building relationships of trust and learning specific skills to effectively serve HOA communities, Parklane has gained the reputation of being one of the specialists in the HOA industry. We feel great pride in the work we do and look forward to future growth. Developing our skills and trusted relationships in the industry we hope to serve our communities as the leader in our industry. There is nothing better than hearing from a client the pride residents feel when they enter their beautifully maintained communities.
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
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 100px 10px;
  }
  .about-info-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 5px 100px 10px;
    img {
      flex: 0 1 auto;
      width: 100%;
      max-width: 300px;
    }
  }
  .tree-stripe {
    flex: 1 1 auto;
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
      margin: 5px 20px 10px;
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

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
  const { companyInfo, isMobile, width } = useAppState();
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

        <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
          In 2011 founder, Eliseo Rios opened Parklane Landscaping after recognizing a rapid growth in the number of housing developments in and around San Antonio. As there were little to no specialized landscapers serving these HOA communities, Parklane became one of the first to pioneer this newly developed market and took on the challenge to become experts in the industry.
        </StyledInfoBodyMessage>

        <StyledInfoBodyMessage fontSize="1.6em" margin="15px var(--side-margin)">
          We currently serve HOA communities in the greater San Antonio area through custom contracts that include general ground maintenance, irrigation repair & installation, landscape design, entryway revitalization, monument design and installation, tree pruning and much more. (See service page for more services.)
        </StyledInfoBodyMessage>

        <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
          Now with over a decade of experience and learning the dynamic of how the infrastructure of the industry is maintained Parklane has built a reputation for being one of the highest quality landscapers serving such prestigious communities as Presidio, Canyon Springs and Fox Grove. Throughout the years we have built important relationships with property management companies to help set and maintain quality standards expected and helped nurture HOA landscape committees to raise curb appeal and property values within their communities.  Parklane also participates in community organizations like SAWS, SAIA, and CAI to stay abreast of the latest industry standards, rules, regulations and laws relative to the HOA industry. Parklane shares this information via free seminars to HOA committees and property management companies. If you would like Parklane Landscaping to teach a free seminar to your HOA please call us at {companyInfo.phone} today.
        </StyledInfoBodyMessage>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="about-header uppercase">Parklane Works With You</div>

        <div className="about-header-2 uppercase">Property Managers</div>
        <ul className="about-list">
          <li>Parklane is a full service firm so all you need is one service call for any property needs.</li>
          <li>Parklane attends HOA Board meetings, Landscape Committee meetings and annual meetings.</li>
          <li>Parklane assigns a dedicated account manager to each property for direct communications and rapid response times.</li>
        </ul>

        <div className="about-header-2 uppercase">Board Members</div>
        <ul className="about-list">
          <li>Parklane understands the different facets of an HOA landscape infrastructure that needs
            to be maintained.</li>
          <li>Parklane recognizes the value of maintaining HOA landscape investments and how to care for them in ways that make the community appealing when home owners wish to sale.</li>
          <li>Parklane is responsive to the needs of the immediacy of HOA communities. Whether it be an irrigation problem, a fallen tree or a project to enhance the beauty of the community, our consistent maintenance schedules allows a sense of peace of mind.</li>
          <li>Parklane is easy to work with, on time and on budget.</li>
        </ul>

        <div className="about-header-2 uppercase">Property Developers</div>
        <ul className="about-list">
          <li>Parklane is a developer’s marketing partner while an HOA is being developed by helping assure quality landscaping and curb appeal.</li>
          <li>Parklane is consistent, on budget and timely.</li>
        </ul>


        {/*<div className="about-info-images">
          <img src={imgMonument6} alt="Estates at Bridgewood" />
          <img src={imgParklaneFamily} alt="Parklane family" />
          <img src={imgCarnival} alt="Carnival" />
        </div>*/}

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
    text-align: center;
  }
  .about-header-2 {
    font-size: 1.7em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorSecondary};
    margin: 30px var(--side-margin) 10px;
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
  .about-list {
    padding-left: 17px;
    margin: 10px var(--side-margin);
    font-size: 1.5em;
    color: ${({ theme }) => theme.colorSecondary};
    font-weight: 300;
    li {
      padding-bottom: 10px;
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
    .about-header-2 {
      font-size: 1.6em;
      margin: 20px 20px 10px;
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

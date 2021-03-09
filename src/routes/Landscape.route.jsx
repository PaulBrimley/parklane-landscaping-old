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
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import SVGIcon from '../components/Atoms/SVGIcon';

/** images **/
const {
  imgColoredPencils,
  imgFlowers1,
  imgLandscapeRendering,
  imgMonument1,
  imgOverhead2,
  imgOverhead3
} = images;

function LandscapeRoute(props) {
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
      <StyledLandscape className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgFlowers1})`,
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
                      <SVGIcon height="100%" width="50px" type="landscape" style={{fill: 'white', marginRight: '7px'}}/>
                      <span className="isBold">HOA</span>
                    </div>
                    <div>LANDSCAPING</div>
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
              <img className="overhead" src={imgOverhead2} alt="overhead 2" />
            </InfoBannerRight>
          }
        />

        <PageDivider1 />

        <br />
        <br />

        <div className="landscape-header uppercase">HOA Landscaping</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          Parklane Landscaping regularly provides pro-active and long-range planning ideas to enhance the landscape appeal of an HOA community. Our team of design and horticulture professionals work on the visual aesthetic as well as the overall health of the environment to provide verdant landscapes for all our clients.
        </StyledInfoBodyMessage>

        <div className="landscape-info-images">
          <img src={imgMonument1} alt="monument 1" />
        </div>

        <div className="landscape-header">Landscape Design</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin) 20px">
          Parklane Landscaping takes pride in ensuring that every one of our properties look their best. Consequently, our design approach is imperative when it comes to making landscape suggestions to our clients. We understand that well-designed communal landscapes should exude balance, beauty and order; all the while providing a welcoming environment for residents, guests and prospective home buyers.
        </StyledInfoBodyMessage>

        <div className="landscape-info-subsection">
          <div className="subsection-images">
            <img src={imgLandscapeRendering} alt="landscape rendering" />
            <img src={imgOverhead3} alt="overhead 3" />
            <img className="colored-pencils" src={imgColoredPencils} alt="colored pencils" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" margin="0 0 10px 0">
              As we start a new landscape project, we take into consideration three things, the aesthetic of the client, the survivability of plant materials, and the impact our choices make on the community. Flowers and trees are investments. It is our goal to make sure that the investment brings forth a good return to the community. Choice landscape adds value to a property and gives it a sense of warmth and welcome.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" margin="0">
              Once Parklane understands the goals of the community, we create the vision. Photos are key in the development of every landscape design project. Using drone photography, we capture an overall view of the entire area being modified. This allows us to make renderings for clients using suggested plant materials. We then take those images and our design team creates digital landscape plans to present to our clients. Once approval is made on the final design, everything is scheduled for Parklane to turn the vision into a reality.
            </StyledInfoBodyMessage>
          </div>
        </div>
      </StyledLandscape>
    </AnimatedStyledRoute>
  );
}
const StyledLandscape = styled.div`
  padding-bottom: 80px;
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
    .overhead {
      width: 80%;
    }
  }
  .landscape-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .landscape-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 40px var(--side-margin);
    img {
      flex: 0 1 auto;
      width: 100%;
    }
  }
  .landscape-info-subsection {
    display: flex;
    margin: 10px var(--side-margin) 0;
    .subsection-images {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 49% 0 0;
      margin-right: 10px;
      img {
        width: 100%;
      }
      .colored-pencils {
        position: absolute;
        top: 150px;
        left: -15%;
        width: 75%;
      }
    }
    .subsection-info {
      padding-top: 10px;
      flex: 49% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    .info-banner-right {
      display: none;
    }
    .landscape-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
        .colored-pencils {
          left: 0;
          width: 50%;
        }
      }
      .subsection-info {
        padding-top: 0;
      }
    }
  }
`;
export default LandscapeRoute;

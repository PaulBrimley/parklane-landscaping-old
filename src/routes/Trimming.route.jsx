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
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import SVGIcon from '../components/Atoms/SVGIcon';

/** images **/
const {
  imgLeaves,
  imgTrees1,
  imgTreeTrimming
} = images;

function ServicesTrimmingRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 60;
    if (width < 800) offset = 100;
    if (width < 700) offset = 100;
    if (width < 400) offset = 40;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '115%';
    if (width < 800) size = '125%';
    if (width < 700) size = '155%';
    if (width < 600) size = '175%';
    // if (width < 400) size = '170%';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesTrimming className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgLeaves})`,
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
                      <SVGIcon height="100%" width="47px" type="trees" style={{fill: 'white', marginRight: '7px'}}/>
                      <span className="isBold">HOA</span>
                    </div>
                    <div>TREE TRIMMING</div>
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

        <br />
        <br />

        <div className="trimming-header uppercase">HOA Tree Trimming</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 130px">
          Nothing transforms an outdoor space like beautifully trimmed trees. Through proper pruning techniques your trees add value to your homes. Not only do they provide shade, but they make your community healthier, add to its safety and aesthetic. Parklane tree trimming professionals have the skills to help your community enjoy the benefits of beautifully maintained trees.
        </StyledInfoBodyMessage>

        <div className="trimming-info-subsection">
          <div className="subsection-images">
            <img src={imgTrees1} alt="trees 1" />
            <img src={imgTreeTrimming} alt="tree trimming" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" margin="0 0 0 20px">
              While the concept of tree pruning seems like a simple DIY project or something you can hand to any landscaper, improper pruning can destroy your landscape. When a tree’s health is at risk, they can face decay, instability, disease and a shorter life span. Most mature trees require trimming at least every 3 years. Some may need to be trimmed more often if they grow quicker or are located near power lines, homes and other obstructions. The best time to trim trees is in the late fall or early spring, just before the tree begins to leaf out again. For more information on tree trimming or if your community has trees that require attention, please contact us today! Parklane will provide you with a free estimate on your next project.
            </StyledInfoBodyMessage>
          </div>
        </div>
      </StyledServicesTrimming>
    </AnimatedStyledRoute>
  );
}
const StyledServicesTrimming = styled.div`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .trimming-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .trimming-info-subsection {
    display: flex;
    margin: 10px 130px 0;
    .subsection-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 50% 0 0;
      img {
        margin-bottom: 10px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        height: 170px;
      }
    }
    .subsection-info {
      flex: 50% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {

  }
`;
export default ServicesTrimmingRoute;

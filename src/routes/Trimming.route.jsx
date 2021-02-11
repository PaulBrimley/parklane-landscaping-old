import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
import imgLeaves1 from '../assets/img/img-leaves-1.jpg';
import imgTrees1 from '../assets/img/img-trees-1.jpg';
import imgTreeTrimming from '../assets/img/img-tree-trimming.jpg';

function ServicesTrimmingRoute(props) {
  const { isMobile, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 20;
    if (width < 700) offset = 30;
    if (width < 400) offset = 40;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '105%';
    if (width < 800) size = '115%';
    if (width < 700) size = '125%';
    if (width < 400) size = '170%';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesTrimming className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgLeaves1})`,
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

        <div className="services-trimming-header">HOA TREE TRIMMING</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          Nothing transforms an outdoor space like a beautifully trimmed tree that provides shade, is healthy and safe for your community. Proper pruning techniques are the best way to ensure this. Our tree trimming professionals at Parklane offer seasonal tree care services that help maintain the appearance of your HOA. Regular pruning can not only preserve the way a tree looks, but it can also stimulate its health and growth. Making sure to add to curb appeal and the overall value of your community.
        </StyledInfoBodyMessage>

        <div className="services-trimming-info-subsection">
          <div className="subsection-images">
            <img src={imgTrees1} alt="trees 1" />
            <img src={imgTreeTrimming} alt="tree trimming" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              While the concept of tree pruning seems like a simple DIY project or something you can hand to your everyday landscaper, improper pruning can destroy your landscape. When a tree's health is at risk, they can face decay, instability, disease and a shorter life.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              Most mature trees require trimming at least every 3 years. They will need to be trimmed more often if they grow quickly or are located near power lines, homes, or other obstructions. The best time to trim a tree is in the late fall or early spring, just before the tree begins to leaf out again.
            </StyledInfoBodyMessage>
            <br/>
            <br/>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              For more information on trimming trees or if your community needs to replace old and rotted trees please contact us today! We would be happy to provide you with a free estimate on your next project.
            </StyledInfoBodyMessage>
          </div>
        </div>

      </StyledServicesTrimming>
    </AnimatedStyledRoute>
  );
}
const StyledServicesTrimming = styled.div`
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-trimming-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .services-trimming-info-subsection {
    display: flex;
    margin: 10px 130px;
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

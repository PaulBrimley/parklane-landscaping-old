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
  imgFence,
  imgFenceBroken,
  imgFenceRepair
} = images;

function ServicesFenceRoute(props) {
  const { companyInfo, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 20;
    if (width < 800) offset = 30;
    if (width < 700) offset = 40;
    if (width < 500) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '100%';
    if (width < 800) size = '110%';
    if (width < 700) size = '115%';
    if (width < 600) size = '135%';
    if (width < 500) size = '130%';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesFence className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgFence})`,
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
                      <SVGIcon height="100%" width="45px" type="fence" style={{fill: 'white', marginRight: '7px'}}/>
                      <span className="isBold">HOA</span>
                    </div>
                    <div>FENCE REPAIR</div>
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

        <div className="fence-header uppercase">HOA Fence Repair</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          If you live in an HOA community, you understand the value of fences. Especially since HOA communities are usually surrounded by them. When one is torn down due to storm or a fallen tree or even an accidental car mishap, rebuilding the fence becomes priority one. Matching the exact materials, colors and quick reparation is our specialty. These small details all play a part in making sure the community stays looking its best. That is why Parklane has in-house masons and fence repair teams. We know how important it is to you. So it is important to us.


        </StyledInfoBodyMessage>

        <div className="fence-info-subsection">
          <div className="subsection-images">
            <img src={imgFenceBroken} alt="broken fence" />
            <img src={imgFenceRepair} alt="fence repair" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" margin="0">
              If you ever have an emergency need to rebuild a fence do not hesitate to call Parklane. We have our staff on call 24/7 for our HOA communities. Whether a tree has fallen or irrigation pipes have burst, Parklane is there to help maintain our HOA communities looking their best.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" margin="0 0 10px 0">
              Do you have an emergency that requires immediate attention? Don’t worry call Parklane Landscaping. Even if you are not a current client of ours, we will be happy to help your community.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" margin="0">
              For emergency fence repairs & irrigation repairs contact Parklane Landscaping and we can be there within 24 hours to assess the damage.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" margin="0">
              <div>{companyInfo.website}</div>
              <div>{companyInfo.email}</div>
              <div>{companyInfo.phone.split('-').join('.')}</div>
            </StyledInfoBodyMessage>
          </div>
        </div>
      </StyledServicesFence>
    </AnimatedStyledRoute>
  );
}
const StyledServicesFence = styled.div`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .fence-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .fence-info-subsection {
    display: flex;
    margin: 10px var(--side-margin) 0;
    .subsection-images {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 49% 0 0;
      margin-right: 10px;
      img {
        margin-bottom: 10px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        max-height: 200px;
      }
    }
    .subsection-info {
      flex: 49% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    .fence-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;
export default ServicesFenceRoute;

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
import imgFence from '../assets/img/img-fence.jpg';
import imgFenceBroken from '../assets/img/img-fence-broken.jpg';
import imgFenceRepair from '../assets/img/img-fence-repair.jpg';

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

        <div className="services-fence-header">HOA FENCE REPAIR</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 var(--side-margin)">
          If you live in an HOA community you realize how important having fences is. Especially since HOA communities are usually surrounded by them. When one is torn down due to storm or fallen tree or even a car mishap, getting the fence up again is a priority. Matching the exact materials, the colors, etc., and repairing it quickly is one of our specialties. This all plays a role in making sure the community stays looking its best. That is why Parklane has in-house masons and fence repairmen. We know how important it is to you. So it is important to us.
        </StyledInfoBodyMessage>

        <div className="services-fence-info-subsection">
          <div className="subsection-images">
            <img src={imgFenceBroken} alt="broken fence" />
            <img src={imgFenceRepair} alt="fence repair" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0">
              If you ever have an emergency need to rebuild a fence do not hesitate to call Parklane. We have our staff on call 24/7 for our HOA communities. Whether a tree has fallen, a fence look like it might be a danger to the community. Parklane is there to repair and help maintain our HOA communities looking their best.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 10px 0">
              Do you have an emergency that requires a fence be repaired? Don't worry call Parklane Landscaping. Even if you are not a current client of ours, we would be happy to help your community.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0">
              For emergency fence repairs contact Parklane Landscaping and we can be there within 24 hours to assess the damage.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0">
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
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-fence-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .services-fence-info-subsection {
    display: flex;
    margin: 10px var(--side-margin);
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
    .services-fence-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
  }
`;
export default ServicesFenceRoute;

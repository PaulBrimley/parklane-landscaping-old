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
import imgHome from '../assets/img/img-home.jpg';

function ServicesFenceRoute(props) {
  const { companyInfo, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 100 - (width / 800 * 100) + 10;
    return offset;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesFence className="body">
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

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          If you live in an HOA community you realize how important having fences is. Especially since HOA communities are usually surrounded by them. When one is torn down due to storm or fallen tree or even a car mishap, getting the fence up again is a priority. Matching the exact materials, the colors, etc., and repairing it quickly is one of our specialties. This all plays a role in making sure the community stays looking its best. That is why Parklane has in-house masons and fence repairmen. We know how important it is to you. So it is important to us.
        </StyledInfoBodyMessage>

        <div className="services-fence-info-subsection">
          <div className="subsection-images">
            <img src={imgHome} alt="Home" />
            <img src={imgHome} alt="Home" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 10px 20px">
              If you ever have an emergency need to rebuild a fence do not hesitate to call Parklane. We have our staff on call 24/7 for our HOA communities. Whether a tree has fallen, a fence look like it might be a danger to the community. Parklane is there to repair and help maintain our HOA communities looking their best.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 10px 20px">
              Do you have an emergency that requires a fence be repaired? Don't worry call Parklane Landscaping. Even if you are not a current client of ours, we would be happy to help your community.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              For emergency fence repairs contact Parklane Landscaping and we can be there within 24 hours to assess the damage.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
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
    margin: 20px 130px 10px;
  }
  .services-fence-info-subsection {
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
      }
    }
    .subsection-info {
      flex: 50% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    
  }
`;
export default ServicesFenceRoute;

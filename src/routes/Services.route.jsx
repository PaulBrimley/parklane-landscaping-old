import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';
import { images } from '../context/img.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';

/** routes **/
import { routes } from './Routes';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import LogoStripe from '../components/Atoms/LogoStripe';
import PageDivider1 from '../components/Atoms/PageDivider1';
import ServiceGuide from '../components/Molecules/ServiceGuide';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
const { imgGuyPlanting2, imgGuyTeaching2 } = images;

function ServicesRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let strength = -0.02;
    if (width < 750) strength = 0.2;
    if (width < 600) strength = 0.4;
    if (width < 400) strength = 0.6;
    if (width < 350) strength = 0.7;
    return width * strength - 350;
  }
  function calcBackgroundSize() {
    let size = '160%';
    if (width < 500) size = '800px';
    if (width < 400) size = '600px';
    return size;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServices className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgGuyPlanting2})`,
            backgroundPosition: `0 calc(${calcBackgroundPosition()}px + ${offset.y}px)`,
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
                      THE <span className="isBold">HOA</span>
                    </div>
                    <div className="isBold">LANDSCAPE</div>
                    <div>SPECIALISTS</div>
                  </div>
                  <div className="hr" />
                  <div className="message">
                    <div>The beauty of maintaining HOA</div>
                    <div>communities is in the details.</div>
                  </div>
                </StyledInfoBannerMessage>
              }
            />
          }
        />

        <PageDivider1 />

        <br />
        <br />

        <div className="services-header uppercase">A Full Service Firm</div>

        <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
          As a full service firm, Parklane Landscaping professionals provide quality design, installation, and consultation services in addition to the expert maintenance of planting beds, turf, trees, planters, water features, fence lines, drainage areas and irrigation systems.
        </StyledInfoBodyMessage>

        <br />
        <br />
        <br />
        <br />

        <div className="services-subsection">
          <div className="subsection-images">
            <img src={imgGuyTeaching2} alt="Guy teaching" />
          </div>
          <div className="subsection-info">
            <div className="services-header-2">Service Evaluation</div>
            <StyledInfoBodyMessage fontSize="1.6em" margin="0 0 10px 0">
              In order to protect the community’s landscape investment, Parklane Landscaping conducts monthly quality assurance visits, irrigation checks and proposes any necessary repairs. Our account executives submit monthly reports detailing our observations and concerns. These reports are vital in assisting property managers in helping us maintain the longevity and investment of the HOA landscape infrastructure. And in cases where individual homeowners have specific issues and concerns, we are delighted to meet with them in person to ensure a thorough understanding of an issue and promptly report back directly to the property manager.
            </StyledInfoBodyMessage>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="service-guide">
          <ServiceGuide />
        </div>

        <br />
        <br />
        <br />
        <br />

        <LogoStripe />

        <br />
        <br />

        <div className="services-header-3">All HOA Services</div>
        <br />
        <div className="services-hoa-services-list">
          <div>Specialists in HOA Common Areas</div>
          <div>General Ground Maintenance</div>
          <div>TCEQ Licensed Irrigation Auditing, Maintenance & Repair</div>
          <div>Annual SAWS Reporting</div>
          <div>Backflow Assembly Testing & Reporting</div>
          <div>Winter Rye Seeding</div>
          <div>Landscape Design & Renovation</div>
          <div>Tree Pruning, Shaping & Installation</div>
          <div>Turf Grass Installation & Maintenance</div>
          <div>Mulch Installation</div>
          <div>Annuals & Perennials Installation</div>
          <div>Landscape & Entry Monument Lighting, Auditing & Repair</div>
          <div>Certified Kiddie Cushion Installation</div>
          <div>Monthly Reporting</div>
          <div>Organic Fertilization</div>
          <div>Stone Masonry Installation & Repair</div>
          <div>Wood Fence Installation & Repair</div>
          <div>Weed Control & Herbicide Management Programs</div>
          <div>Drainage, Easement, Field & Fence Line Shredding</div>
          <div>HOA Annual & Board Meeting Participation</div>
        </div>
      </StyledServices>
    </AnimatedStyledRoute>
  );
}
const StyledServices = styled.div`
  padding-bottom: 90px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .service-guide {
    margin: 20px var(--side-margin) 10px;
  }
  .services-header {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .services-header-2 {
    font-size: 2.7em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
  }
  .services-header-3 {
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin: 10px var(--side-margin) 0;
  }
  .services-hoa-services-list {
    font-size: 1.2em;
    margin: 0 var(--side-margin);
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    white-space: nowrap;
    div {
      margin-bottom: 10px;
    }
  }
  .services-subsection {
    display: flex;
    margin: 10px var(--side-margin) 0;
    .subsection-images {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1 1 40%;
      img {
        width: 100%;
      }
    }
    .subsection-info {
      flex: 1 1 60%;
      padding-left: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .services-header {
      font-size: 2em;
      margin: 20px;
    }
    .services-header-2 {
      margin: 20px 0 10px;
    }
    .services-hoa-services-list {
      margin: 0 20px 50px;
      white-space: normal;
    }
    .services-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
      .subsection-info {
        padding-left: 0;
      }
    }
  }
`;
export default ServicesRoute;

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

function ServicesMaintenanceRoute(props) {
  const { companyInfo, isMobile, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 100 - (width / 800 * 100) + 10;
    return offset;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesMaintenance className="body">
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
                    <div>MAINTENANCE</div>
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

        <div className="services-maintenance-header">HOA Maintenance</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          When Parklane forges a maintenance contract with an HOA community, our goal is to deliver the highest quality service we can offer. The Parklane team comes together to make sure we nurture not only the landscapes, but our relationships with every HOA client. Our account representatives maintain constant contact with the property's HOA community manager. In case of emergencies or urgent care notices, our teams are always available 24/7 to address any needs that may arise. Our licensed irrigators are also on call to address broken pipes, misfiring sprinkler heads and any other irrigation related issues that arise outside of normal business hours. To find out more about how you can get a customized maintenance plan for your HOA community, contact Parklane Landscaping today.
        </StyledInfoBodyMessage>

        <div className="contact-info-phone-email">
          <span>{companyInfo.phone}</span><span>{companyInfo.email}</span>
        </div>

        <div className="services-maintenance-info-images">
          <img src={imgHome} alt="Home" />
        </div>

      </StyledServicesMaintenance>
    </AnimatedStyledRoute>
  );
}
const StyledServicesMaintenance = styled.div`
  .contact-info-phone-email {
    color: ${({theme}) => theme.colorPrimary};
    margin: 30px 130px;
    text-align: center;
    font-size: 1.4em;
    font-weight: 300;
    text-transform: uppercase;
    span:first-child {
      padding-right: 5px;
      border-right: 1px solid ${({theme}) => theme.colorPrimary};
    }
    span:last-child {
      padding-left: 5px;
    }
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-maintenance-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .services-maintenance-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 0 130px 60px;
    img {
      flex: 0 1 auto;
      width: 100%;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {

  }
`;
export default ServicesMaintenanceRoute;

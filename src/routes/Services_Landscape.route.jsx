import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import InfoBannerRight from '../components/Molecules/InfoBannerRight';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
import imgHome from '../assets/img/img-home.jpg';
import imgPictureFrame from '../assets/img/img-picture-frame.png';

function ServicesLandscapeRoute(props) {
  const { isMobile, width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function calcBackgroundPosition() {
    let offset = 10;
    if (width < 800) offset = 100 - (width / 800 * 100) + 10;
    return offset;
  }

  return (
    <AnimatedStyledRoute>
      <StyledServicesLandscape className="body">
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
                    <div>LANDSCAPE</div>
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
              <img className="picture-frame" src={imgPictureFrame} alt="picture frame" />
            </InfoBannerRight>
          }
        />

        <PageDivider1 />

        <div className="services-landscape-header">HOA Landscape</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          Parklane Landscaping provides pro-active and long-range planning ideas to enhance the landscape appeal of an HOA community. Our team of design and horticulture professionals work on the visual aesthetic and on the health of the environment in order to provide a verdant landscape. Our professionals provide expert guidance to propose beautiful landscape designs and to provide long-range planning to keep the landscape sustainable and vibrant.
        </StyledInfoBodyMessage>

        <div className="services-landscape-info-images">
          <img src={imgHome} alt="Home" />
        </div>

        <div className="services-landscape-header">Landscape Design</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px 20px">
          Parklane Landscaping takes pride in ensuring that every one of our properties looks its best. As such, we take our design approach very seriously when it comes to making landscape suggestions to our clients. We understand that well-designed communal landscapes should exude balance, beauty and order; all the while providing a welcoming environment for residents, guests and prospective community members.
        </StyledInfoBodyMessage>

        <div className="services-landscape-info-subsection">
          <div className="subsection-images">
            <img src={imgHome} alt="Home" />
            <img src={imgHome} alt="Home" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              As we start a new landscape project we take into consideration three things, the aesthetic of the client, ability of a plant's survival in the given area, and the impact our choices make on the community. Flowers and trees are an investment. It is our goal to make sure that the investment brings a good return to the community. Choice landscape adds value to a property and gives it a sense of welcome and warmth.
            </StyledInfoBodyMessage>
            <br/>
            <br/>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 20px">
              Once Parklane understands the goals of the community, we create the vision. Photos are very important in the development of every landscape design project. Using drone photography, we are able to get an overall view of the entire area being modified. This allows us to make renderings for our clients using suggested plant materials. We then take those images and use design programs to create the virtual spaces within the project. Once approval is made on the final design plan, everything is scheduled for Parklane to turn the vision into reality.
            </StyledInfoBodyMessage>
          </div>
        </div>

      </StyledServicesLandscape>
    </AnimatedStyledRoute>
  );
}
const StyledServicesLandscape = styled.div`
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
  .services-landscape-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .services-landscape-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 40px 130px;
    img {
      flex: 0 1 auto;
      width: 100%;
    }
  }
  .services-landscape-info-subsection {
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
    .info-banner-right {
      display: none;
    }
  }
`;
export default ServicesLandscapeRoute;

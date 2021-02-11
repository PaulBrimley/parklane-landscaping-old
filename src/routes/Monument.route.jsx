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
import imgMonument1 from '../assets/img/img-monument-1.jpg';
import imgMonument2 from '../assets/img/img-monument-2.jpg';
import imgMonument3 from '../assets/img/img-monument-3.jpg';
import imgMonument4 from '../assets/img/img-monument-4.jpg';
import imgMonument5 from '../assets/img/img-monument-5.jpg';

function ServicesMonumentRoute(props) {
  const { companyInfo, width } = useAppState();
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
      <StyledServicesMonument className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgMonument1})`,
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
                    <div>Monument</div>
                    <div>Design & Repair</div>
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

        <div className="services-monument-header">HOA Monument Repair</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">
          Monuments are the first thing people see when they pass or enter an HOA community. It is important that they have long lasting appeal. However, sometimes things happen. Once in a while Parklane receives a request to rebuild an entryway monument due to erosion or a minor car accident. This can be a difficult task when only a part of a monument needs replacing. New stones or materials need to be used and match the old ones. When an entire monument needs rebuilding materials need to match the former style and still match the surrounding architectural details.
        </StyledInfoBodyMessage>

        <div className="services-monument-info-subsection">
          <div className="subsection-images">
            <img src={imgMonument2} alt="monument 2" />
            <img src={imgMonument3} alt="monument 3" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 10px">
              Parklane has a very skilled in-house masonry team. Little details cannot be overlooked when it comes to matching old materials with new ones. Whether you are replacing a column in a stone fence or a piece of a monument Parklane goes the extra mile to make sure no detail is lost.
            </StyledInfoBodyMessage>
            <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 0 0 10px">
              Our masonry team has over ten years of experience. Because they are part of our in-house team, you can be sure that every step of the project is directly overseen by Parklane. Starting from the original design til the last brick is laid, Parklane is there to make sure everything runs smoothly.
            </StyledInfoBodyMessage>
          </div>
        </div>

        <div className="contact-info-phone-email">
          For estimates call {companyInfo.phone}
        </div>

        <div className="services-monument-header">Monument Design</div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px 20px">
          From logo design, to architectural rendering, to brick and mortar, Parklane has the capability to create the monument of your HOA's dreams. We know how important entryways are to every HOA community. A monument sets the stage for the rest of the property. They can be various architectural styles and design. Landscape of course plays a huge part in the final monument project. Parklane has had the privilege of working many in the San Antonio area. Whether it is designing them from scratch or refurbishing parts of them, our end goal is to add to their overall appeal and value.
        </StyledInfoBodyMessage>

        <div className="services-monument-info-subsection">
          <div className="subsection-images">
            <img src={imgMonument4} alt="monument 4" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" fontStyle="italic" lineHeight="1.2em" margin="30px 0 0 10px">
              Here is a simple example of a request Parklane received from one of its HOA clients. They asked for a renewed HOA logo and sign as well as an overall monument re-design and landscaping plan to accent the overall look and feel utilizing materials to match their current structures.
            </StyledInfoBodyMessage>
          </div>
        </div>

        <div className="services-monument-info-images">
          <img src={imgMonument5} alt="monument 5" style={{height: '230px'}}/>
        </div>

      </StyledServicesMonument>
    </AnimatedStyledRoute>
  );
}
const StyledServicesMonument = styled.div`
  .contact-info-phone-email {
    color: ${({theme}) => theme.colorPrimary};
    margin: 30px 130px;
    text-align: center;
    font-size: 1.4em;
    font-weight: 300;
    text-transform: uppercase;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .services-monument-header {
    font-size: 3em;
    font-weight: 400;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px 130px 10px;
  }
  .services-monument-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 0 130px 60px;
    img {
      flex: 0 1 auto;
      width: 100%;
      object-fit: cover;
      object-position: center 45%;
    }
  }
  .services-monument-info-subsection {
    display: flex;
    margin: 10px 130px;
    .subsection-images {
      flex: 50% 0 0;
      img {
        width: 100%;
        &:first-child {
          margin-bottom: 10px;
        }
      }
    }
    .subsection-info {
      flex: 50% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {

  }
`;
export default ServicesMonumentRoute;

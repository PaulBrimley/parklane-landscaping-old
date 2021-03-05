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
  imgMonument1,
  imgMonument2,
  imgMonument3
} = images;

function MonumentRepairRoute(props) {
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
      <StyledMonumentRepair className="body">
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
                      <SVGIcon height="100%" width="63px" type="masonry" style={{fill: 'white', marginRight: '7px'}}/>
                      <span className="isBold">HOA</span>
                    </div>
                    <div>MONUMENT</div>
                    <div>REPAIR</div>
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

        <div className="monument-header uppercase">HOA Monument Repair</div>

        <StyledInfoBodyMessage fontSize="1.2em" margin="0 var(--side-margin)">
          A community’s entryway monument is the first thing one sees when passing or entering an HOA development. Hence, it is vital they have long lasting appeal. However, sometimes mishaps occur. Once in a while, Parklane receives requests to rebuild monument due to erosion or car accident. This can be a difficult task when only a portion needs replacing. New stones or materials need to be used that match exactly. When an entire monument needs rebuilding, materials need to match former styles and architectural details. For this reason, Parklane has a very skilled in-house masonry team.
        </StyledInfoBodyMessage>

        <div className="monument-info-subsection">
          <div className="subsection-images">
            <img src={imgMonument2} alt="monument 2" />
            <img src={imgMonument3} alt="monument 3" />
          </div>
          <div className="subsection-info">
            <StyledInfoBodyMessage fontSize="1.2em" margin="0">
              Our masonry team has over ten years of experience. They know small details cannot be overlooked when it comes to matching old materials with new ones. Whether you are replacing a column in a stone fence or a remnant of a monument, Parklane goes the extra mile to make sure no detail is missed. Having an in-house team, allows us to oversee every step of each project. Starting with the original design, until the last brick is layed, Parklane is there to make sure no stone is unturned.
            </StyledInfoBodyMessage>
          </div>
        </div>

        <div className="contact-info">
          For estimates call {companyInfo.phone}
        </div>

      </StyledMonumentRepair>
    </AnimatedStyledRoute>
  );
}
const StyledMonumentRepair = styled.div`
  padding-bottom: 100px;
  .contact-info {
    color: ${({theme}) => theme.colorPrimary};
    margin: 30px var(--side-margin) 0;
    text-align: center;
    font-size: 1.4em;
    font-weight: 300;
    text-transform: uppercase;
  }
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
  }
  .monument-header, .monument-header-2 {
    font-size: 3em;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    margin: 20px var(--side-margin) 10px;
  }
  .monument-header-2 {
    font-size: 2em;
  }
  .monument-info-images {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    margin: 0 var(--side-margin);
    img {
      flex: 0 1 auto;
      width: 100%;
      object-fit: cover;
      object-position: center 45%;
    }
  }
  .monument-info-subsection {
    display: flex;
    margin: 10px var(--side-margin);
    .subsection-images {
      margin-right: 10px;
      flex: 49% 0 0;
      img {
        width: 100%;
        &:first-child {
          margin-bottom: 10px;
        }
      }
    }
    .subsection-info {
      flex: 49% 0 0;
    }
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    .monument-info-subsection {
      flex-direction: column;
      .subsection-images {
        margin-right: 0;
        margin-bottom: 10px;
      }
      &.lower {
        flex-direction: column-reverse;
        .subsection-info {
          margin-bottom: 10px;
        }
      }
    }
  }
`;
export default MonumentRepairRoute;

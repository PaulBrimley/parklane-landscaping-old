import { Textfit } from 'react-textfit';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import Button from '../components/Atoms/Button';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
import imgGuyPlanting1 from '../assets/img/img-guy-planting-1.png';
import imgNewsLetter1 from '../assets/img/img-news-letter-1.jpg';
import imgNewsLetter2 from '../assets/img/img-news-letter-2.jpg';

function SubscribeRoute(props) {
  const { width } = useAppState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function handleSubmit() {
    // console.log('clicked');
  }

  function calcBackgroundPosition() {
    let offset = 30;
    if (width < 900) offset = 45;
    if (width < 800) offset = 50;
    return offset;
  }
  function calcBackgroundSize() {
    let size = '140%';
    if (width < 700) size = '160%';
    if (width < 600) size = '200%';
    return size;
  }


  return (
    <AnimatedStyledRoute>
      <StyledSubscribe className="body">
        <InfoBanner
          style={{
            backgroundImage: `url(${imgGuyPlanting1})`,
            backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
            // backgroundPosition: `center calc(${calcBackgroundPosition()}% + ${offset.y}px)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: calcBackgroundSize()
            // backgroundSize: width < 500 ? '500px' : 'cover'
          }}
          config={{
            // backgroundSize: 150,
            // backgroundUrl: imgHome,
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
                    <div>TIPS AND INFO</div>
                  </div>
                  <div className="hr" />
                  <div className="message">
                    <div>The beauty of maintaining HOA</div>
                    <div>community is in the details.</div>
                  </div>
                </StyledInfoBannerMessage>
              }
            />
          }
        />

        <PageDivider1 />

        <div className="subscribe-now-header">
          Subscribe now!
        </div>
        <div className="receive-emails">
          To receive e-mails with tips and information for your HOA
        </div>

        <StyledInfoBodyMessage fontSize="1.2em" lineHeight="1.2em" margin="0 130px">At Parklane Landscaping, our HOA clients are very important to us. Because of this we do our best to stay abreast of the latest information that effects our industry and most importantly the HOA communities we serve. When we come across these little gems or products that we feel are better, more cost-effective, we share the knowledge. Every month these tidbits of information are sent out by Parklane via our subscription email. As a result of this we have been able to help some of our clients save money and add a little more value to their communities. Which at the end of the day is what we are here for. To subscribe, please click the button below.</StyledInfoBodyMessage>

        <div className="separator" />

        <div className="news-letters">
          <div><img src={imgNewsLetter1} alt="news letter 1"/></div>
          <div><img src={imgNewsLetter2} alt="news letter 2"/></div>
        </div>

        <div className="subscribe-now-action">
          <Button classes="subscribe-now-button" height="30px" width="150px" fontSize="1.5em" onClick={handleSubmit}>
            Subscribe Now
          </Button>
        </div>
      </StyledSubscribe>
    </AnimatedStyledRoute>
  );
}
const StyledSubscribe = styled.div`
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .news-letters {
    margin: 40px 130px;
    display: flex;
    justify-content: space-between;
    div {
      flex: 45% 0 0;
      img {
        width: 100%;
      }
    }
  }
  .receive-emails {
    margin: -10px 130px 5px;
    font-size: 1.3em;
    font-weight: 600;
    color: ${({ theme }) => theme.colorBlack};
    text-align: center;
    text-transform: uppercase;
  }
  .separator {
    width: 80%;
    border-bottom: 4px solid red;
    margin: 20px auto;
  }
  .subscribe-now-header {
    margin: 50px 130px 0;
    font-size: 6em;
    letter-spacing: -3px;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: justify;
    text-transform: uppercase;
  }
  .subscribe-now-action {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .subscribe-now-button {
      color: ${({ theme }) => theme.colorWhite};
      border: 1px solid ${({ theme }) => theme.colorPrimary};
      background: ${({ theme }) => theme.colorPrimary};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colorSecondary};
        background: ${({ theme }) => theme.colorSecondary};
      }
    }
  }
`;
export default SubscribeRoute;

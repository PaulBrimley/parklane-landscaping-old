import { Textfit } from 'react-textfit';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';
import { useModalState } from '../context/modal.context';
import { images } from '../context/img.context';

/** hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect.hook';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import Button from '../components/Atoms/Button';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';
import SubscribeForm from '../components/Molecules/SubscribeForm';

/** images **/
const { imgGuyPlanting1, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3, imgNewsLetter4, imgNewsLetter5, imgNewsLetter6 } = images;

function SubscribeRoute(props) {
  const { width } = useAppState();
  const { toggleModal } = useModalState();
  const { offset } = useParallaxEffect({ strength: 0.2 });

  function handleOpenModal() {
    toggleModal({ content: <SubscribeForm />, open: true });
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
                    <div>TIPS AND INFO</div>
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

        <div className="subscribe-now-header">Learn more about HOA landscape infrastructures!</div>

        <StyledInfoBodyMessage fontSize="1.6em" margin="0 var(--side-margin)">
          At Parklane Landscaping, our HOA clients are very important to us. Because of this we do our best to stay abreast of the latest information that effects our industry and most importantly the HOA communities we serve. When we come across these little gems or products that we feel are better and more cost-effective, we like to share the knowledge. Every month these tidbits of information are sent out by Parklane via our subscription email. As a result, we have been able to help some of our clients save money and add a little more value to their communities. Which at the end of the day is what we are here for. To subscribe, please click the button below.
        </StyledInfoBodyMessage>

        <br />
        <br />

        <div className="receive-emails">To receive e-mails with tips and information for your HOA</div>

        <div className="separator" />

        <div className="subscribe-now-action">
          <Button classes="subscribe-now-button" height="30px" width="150px" fontSize="1.5em" onClick={handleOpenModal}>
            Subscribe Now
          </Button>
        </div>

        <div className="news-letters">
          <div>
            <img src={imgNewsLetter1} alt="news letter 1" />
          </div>
          <div>
            <img src={imgNewsLetter2} alt="news letter 2" />
          </div>
          <div>
            <img src={imgNewsLetter3} alt="news letter 3" />
          </div>
          <div>
            <img src={imgNewsLetter4} alt="news letter 4" />
          </div>
          <div>
            <img src={imgNewsLetter5} alt="news letter 5" />
          </div>
          <div>
            <img src={imgNewsLetter6} alt="news letter 6" />
          </div>
        </div>
      </StyledSubscribe>
    </AnimatedStyledRoute>
  );
}
const StyledSubscribe = styled.div`
  padding-bottom: 100px;
  .info-banner-left {
    flex: 1 1 auto;
    padding-top: 50px;
    margin-bottom: 40px;
  }
  .news-letters {
    margin: 40px var(--side-margin);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    div {
      img {
        width: 100%;
      }
    }
  }
  .receive-emails {
    margin: 0 var(--side-margin);
    font-size: 1.9em;
    font-weight: 600;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    text-transform: uppercase;
  }
  .separator {
    border-bottom: 4px solid red;
    margin: 10px var(--side-margin);
  }
  .subscribe-now-header {
    font-size: 4em;
    margin: 50px var(--side-margin) 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    text-transform: uppercase;
    text-align: center;
  }
  .subscribe-now-action {
    display: flex;
    justify-content: center;
    margin: 20px var(--side-margin) 0;
    .subscribe-now-button {
      color: ${({ theme }) => theme.colorWhite};
      border: 1px solid ${({ theme }) => theme.colorSecondary};
      background: ${({ theme }) => theme.colorSecondary};
      &:hover {
        border: 1px solid ${({ theme }) => theme.colorPrimary};
        background: ${({ theme }) => theme.colorPrimary};
      }
    }
  }
  @media (max-width: 800px) {
    .subscribe-now-header {
      font-size: 4.5em;
    }
  }
  @media (max-width: 700px) {
    .subscribe-now-header {
      font-size: 4em;
    }
  }
  @media (max-width: 600px) {
    .subscribe-now-header {
      font-size: 3em;
    }
  }
  @media (max-width: 500px) {
    .subscribe-now-header {
      font-size: 2em;
      text-align: left;
    }
  }
`;
export default SubscribeRoute;

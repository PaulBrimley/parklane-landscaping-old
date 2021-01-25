import { useRef } from 'react';
import { Textfit } from 'react-textfit';
import styled from 'styled-components';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import Button from '../components/Atoms/Button';
import Footer from '../components/Organisims/Footer';
import Header from '../components/Organisims/Header';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';
import StyledInfoBodyMessage from '../components/Styled/StyledInfoBodyMessage';

/** images **/
//need actual info banner background image
import imgHome from '../assets/img/img-home.jpg';

function SubscribeRoute(props) {
  function handleSubmit() {
    console.log('clicked');
  }

  return (
    <AnimatedStyledRoute>
      {/*<Header />*/}
      <StyledSubscribe className="body">
        <InfoBanner
          backgroundUrl={imgHome}
          height="300px"
          // parallaxStart={140}
          parallaxStrength={0.2}
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

        <Textfit className="subscribe-now-header" mode="single">
          Subscribe now!
        </Textfit>
        <Textfit className="receive-emails" mode="single">
          To receive e-mails with tips and information for your HOA
        </Textfit>

        <StyledInfoBodyMessage margin="30px">At Parklane Landscaping, our HOA clients are very important to us. Because of this we do our best to stay abreast of the latest information that effects our industry and most importantly the HOA communities we serve. When we come across these little gems or products that we feel are better, more cost-effective, we share the knowledge. Every month these tidbits of information are sent out by Parklane via our subscription email. As a result of this we have been able to help some of our clients save money and add a little more value to their communities. Which at the end of the day is what we are here for. To subscribe, please click the button below.</StyledInfoBodyMessage>
        <div className="separator" />
        <div className="news-letters">
          <div>news letter 1</div>
          <div>news letter 2</div>
        </div>
        <div className="subscribe-now-action">
          <Button classes="subscribe-now-button" height="30px" width="150px" fontSize="1.5em" onClick={handleSubmit}>
            Subscribe Now
          </Button>
        </div>
      </StyledSubscribe>
      {/*<Footer />*/}
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
    display: flex;
    justify-content: space-around;
  }
  .receive-emails {
    padding: 0 6%;
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
    margin-top: 50px;
    padding: 0 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    text-transform: uppercase;
  }
  .subscribe-now-action {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    .subscribe-now-button {
      color: ${({ theme }) => theme.colorSecondary};
      border: 1px solid ${({ theme }) => theme.colorSecondary};
      &:hover {
        color: ${({ theme }) => theme.colorWhite};
        background: ${({ theme }) => theme.colorPrimary};
        border: 1px solid ${({ theme }) => theme.colorPrimary};
      }
    }
  }
`;
export default SubscribeRoute;

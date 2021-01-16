import { useRef } from 'react';

/** components **/
import AnimatedRoute from '../components/Atoms/AnimatedRoute';
import Button from '../components/Atoms/Button';
import Footer from '../components/Organisims/Footer';
import Header from '../components/Organisims/Header';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import StyledInfoBannerAction from '../components/Styled/StyledInfoBannerAction';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';

function SubscribeRoute(props) {
  const scrollRef = useRef();

  function handleSubmit() {

  }

  return (
    <AnimatedRoute ref={scrollRef}>
      <Header />
      <div className="body">
        <InfoBanner
          backgroundUrl="http://parklanelandscaping.onshark.com/wp-content/uploads/2020/09/slide-newsletter-bkg2.jpg"
          backgroundUrlAlt="Parklane subscribe image"
          parallaxStrength={0.2}
          scrollRef={scrollRef}
          slotLeft={
            <InfoBannerLeft
              /*action={
                <StyledInfoBannerAction>
                  <Button onClick={handleSubmit} fontSize="0.8em">LEARN MORE</Button>
                </StyledInfoBannerAction>
              }*/
              message={
                <StyledInfoBannerMessage
                  message="The beauty of maintaining HOA community is in the details."
                  title="THE HOA LANDSCAPE TIPS AND INFO"
                  titleBolded={['HOA', 'LANDSCAPE']}>
                  <div className="title">
                    <div>THE <span className="isBold">HOA</span></div>
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
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
        <p>a bunch of stuff</p>
      </div>
      <Footer />
    </AnimatedRoute>
  );
}
export default SubscribeRoute;

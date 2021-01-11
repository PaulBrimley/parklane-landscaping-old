import { useRef } from 'react';

/** custom hooks **/
import useParallaxEffect from '../hooks/useParallaxEffect';

/** components **/
import Footer from '../components/Organisims/Footer';
import Header from '../components/Organisims/Header';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerAction from '../components/Atoms/InfoBannerAction';
import InfoBannerMessage from '../components/Atoms/InfoBannerMessage';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import StyledRoute from '../components/Styled/StyledRoute';

function SubscribeRoute(props) {
  const scrollRef = useRef();

  return (
    <StyledRoute ref={scrollRef}>
      <Header />
      <div className="body">
        <InfoBanner
          backgroundUrl="http://parklanelandscaping.onshark.com/wp-content/uploads/2020/09/slide-newsletter-bkg2.jpg"
          backgroundUrlAlt="Parklane subscribe image"
          parallaxStrength={0.2}
          scrollRef={scrollRef}
          slotLeft={
            <InfoBannerLeft
              action={<div>action here</div>}
              message={
                <InfoBannerMessage
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
                </InfoBannerMessage>
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
    </StyledRoute>
  );
}
export default SubscribeRoute;

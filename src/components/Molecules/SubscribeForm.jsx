import { Textfit } from 'react-textfit';
import styled from 'styled-components';

/** context **/
import { images } from '../../context/img.context';

/** images **/
const { imgNewsLetter1, imgNewsLetter2 } = images;

function SubscribeForm(props) {
  return (
    <StyledSubscribeForm>
      <Textfit className="header" mode="single">
        Subscribe Now!
      </Textfit>
      <div className="receive-emails">To receive Parklane e-mail blasts!</div>

      <div className="separator" />

      <div className="news-letters">
        <div>
          <img src={imgNewsLetter1} alt="news letter 1" />
        </div>
        <div>
          <img src={imgNewsLetter2} alt="news letter 2" />
        </div>
        <div>
          <img src={imgNewsLetter2} alt="news letter 2" />
        </div>
      </div>

      <div className="separator" />

    </StyledSubscribeForm>
  );
}
const StyledSubscribeForm = styled.div`
  padding: 40px 70px;
  .header {
    font-weight: 700;
    color: ${({ theme }) => theme.colorBlack};
    text-transform: uppercase;
  }
  .news-letters {
    display: flex;
    justify-content: space-between;
    div {
      flex: 32% 0 0;
      img {
        width: 100%;
      }
    }
  }
  .receive-emails {
    font-size: 1.3em;
    font-weight: 600;
    color: ${({ theme }) => theme.colorBlack};
    text-align: center;
    text-transform: uppercase;
  }
  .separator {
    border-bottom: 4px solid red;
    margin: 20px auto;
  }
  @media (max-width: 800px) {
    padding: 40px;
    .receive-emails {
      font-size: 1.2em;
    }
    .subscribe-now-header {
      font-size: 4.5em;
    }
  }
  @media (max-width: 700px) {
    .receive-emails {
      font-size: 1.1em;
    }
    .subscribe-now-header {
      font-size: 4em;
    }
  }
  @media (max-width: 600px) {
    .receive-emails {
      font-size: 0.9em;
    }
    .subscribe-now-header {
      font-size: 3em;
    }
  }
  @media (max-width: 500px) {
    padding: 20px;
    .receive-emails {
      font-size: 0.8em;
    }
    .subscribe-now-header {
      font-size: 2.5em;
    }
  }
`;
export default SubscribeForm;

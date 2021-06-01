import { useEffect, useState } from 'react';
import { Textfit } from 'react-textfit';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { Loader4 } from 'styled-icons/remix-line';

/** context **/
import { useEmailState } from '../../context/email.context';
import { useModalState } from '../../context/modal.context';
import { images } from '../../context/img.context';

/** components **/
import Button from '../Atoms/Button';
import PageDivider2 from '../Atoms/PageDivider2';

/** images **/
const { imgNewsLetter1, imgNewsLetter2, imgNewsLetter3 } = images;

function SubscribeForm(props) {
  const { sendEmail, templateIds } = useEmailState();
  const { toggleModal } = useModalState();
  const [checkbox, setCheckbox] = useState(false);
  const [form, setForm] = useState({
    email: '',
    name: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }
  async function handleSubmit() {
    if (!checkbox) return;
    setSubmitting(true);
    try {
      validateForm();
      await sendEmail({
        form,
        templateId: templateIds.SUBSCRIPTION_TEMPLATE_ID
      });
      toast.success('Contact request submitted successfully');
      toggleModal({ open: false });
      resetForm();
    } catch (err) {
      toast.error(err.message);
    }
    setSubmitting(false);
  }
  function resetForm() {
    setCheckbox(false);
    setForm({
      email: '',
      name: ''
    });
  }
  function validateForm() {
    const missingFields = [];
    if (!form.name) missingFields.push('name');
    if (!form.email) missingFields.push('email');
    if (missingFields.length) throw new Error(`Please fill in the required form fields: ${missingFields.join(', ')}`);
  }
  return (
    <StyledSubscribeForm>
      <Textfit className="header" mode="single">
        Subscribe Now!
      </Textfit>
      <div className="receive-emails">To receive Parklane e-mail blasts!</div>

      <PageDivider2 />

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
      </div>

      <PageDivider2 margin="20px auto"/>

      <form className="contact-form">
        <input className="contact-form-input" placeholder="NAME" name="name" value={form.name} onChange={handleChange} />
        <input className="contact-form-input" placeholder="EMAIL" name="email" value={form.email} onChange={handleChange} />
        <label className="contact-form-checkbox-label">
          <input className="contact-form-checkbox" type="checkbox" name="checkbox" checked={checkbox} value={checkbox} onChange={e => setCheckbox(e.target.checked)} />
          <span>Yes, I would like to receive the Parklane Landscaping information E-mail blasts for my HOA community!</span>
        </label>
        <div className="contact-form-controls">
          {submitting ? (
            <Loader4 className="loading" />
          ) : (
            <Button classes="submit-form-button" disabled={submitting || !checkbox} fontSize="0.8em" fontWeight="400" onClick={handleSubmit} shadowColor="colorTransparent" width="40px" padding="7px 14px 6px">
              Send
            </Button>
          )}
        </div>
      </form>
    </StyledSubscribeForm>
  );
}
const StyledSubscribeForm = styled.div`
  padding: 40px 70px;
  .contact-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    background-color: ${({ theme }) => theme.colorPrimary};
    padding: 5px 8px 7px;
    margin: 0 auto;
    .contact-form-checkbox {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 0;
      &:before {
        content: '';
        display: flex;
        width: 10px;
        height: 10px;
        cursor: pointer;
        background-color: #fff;
        border: 1px solid ${props => props.theme.colorWhite};
        transition: border 0.25s, box-shadow 0.25s;
      }
      &:checked:before {
        background: ${props => props.theme.colorPrimary};
        box-shadow: inset 0 0 0 1px #fff;
      }
      &:focus {
        outline: none;
      }
    }
    .contact-form-checkbox-label {
      display: flex;
      align-items: flex-start;
      margin: 7px 0 2px;
      color: ${({ theme }) => theme.colorWhite};
      font-size: 1.1em;
      font-weight: 400;
      cursor: pointer;
      span {
        padding-left: 5px;
      }
    }
    .contact-form-input {
      width: 100%;
      padding: 8px;
      margin: 2px 0;
      border: none;
      background-color: #fff;
      box-sizing: border-box;
      box-shadow: 0 0 2px ${props => props.theme.colorTransparent};
      color: ${({ theme }) => theme.colorPrimary};
      font-family: 'Josefin Sans', sans-serif;
      font-size: 1em;
      font-weight: 200;
      outline: none;
      transition: box-shadow 0.25s, border-bottom 0.25s;
      &:focus {
        box-shadow: 0 0 2px ${props => props.theme.colorGreyMediumLight};
        &.hasError {
          box-shadow: 0 0 2px ${props => props.theme.colorDanger};
        }
      }
    }
    .contact-form-controls {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .loading {
        height: 30px;
        width: 30px;
        color: ${({ theme }) => theme.colorWhite};
        animation: rotation 2s infinite linear;
      }
      .submit-form-button {
        color: ${({ theme }) => theme.colorWhite};
        background-color: ${({ theme }) => theme.colorSecondary};
        &:hover {
          background-color: ${({ theme }) => theme.colorSecondaryOpaque};
        }
      }
    }
  }
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
    .news-letters {
      flex-direction: column;
      div:nth-child(n + 2) {
        display: none;
      }
    }
    .receive-emails {
      font-size: 0.8em;
    }
    .subscribe-now-header {
      font-size: 2.5em;
    }
  }
`;
export default SubscribeForm;

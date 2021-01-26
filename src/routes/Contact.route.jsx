import React, { useState } from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../context/app.context';

/** components **/
import AnimatedStyledRoute from '../components/Atoms/AnimatedStyledRoute';
import Button from '../components/Atoms/Button';
import InfoBanner from '../components/Molecules/InfoBanner';
import InfoBannerLeft from '../components/Molecules/InfoBannerLeft';
import PageDivider1 from '../components/Atoms/PageDivider1';
import StyledInfoBannerMessage from '../components/Styled/StyledInfoBannerMessage';

/** images **/
//need actual info banner background image
import imgLeaves from '../assets/img/img-leaves.jpg';

function ContactRoute(props) {
  const { companyInfo, isMobile } = useAppState();

  function handleSubmit() {
    // console.log('clicked');
  }
  return (
    <AnimatedStyledRoute>
      <StyledContact className="body">
        <InfoBanner
          config={{
            /*backgroundPosition: {
              xPercent: 10,
              yPixels: isMobile ? 10 : -50
            },*/
            backgroundSize: 150,
            backgroundUrl: imgLeaves,
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
                    <div>Specialists</div>
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

        <div className="contact-form-wrapper">
          <div className="form-header">Contact Us</div>
          <form className="contact-form">
            <input className="contact-form-input" placeholder="NAME" />
            <input className="contact-form-input" placeholder="EMAIL" />
            <input className="contact-form-input" placeholder="PHONE" />
            <textarea className="contact-form-input" rows="8" placeholder="MESSAGE" />
            <div className="contact-form-controls">
              <Button classes="submit-form-button" fontSize="0.8em" fontWeight="400" onClick={handleSubmit} shadowColor="colorTransparent" width="40px" padding="5px 5px 4px" margin="5px 0 0">
                SEND
              </Button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <div className="contact-info-message">Parklane Landscaping is a full service HOA landscape company. We service San Antonio and the surrounding areas. If you have any questions or would like a bid for your next HOA project, please contact Parklane Landscaping.</div>
          <div className="contact-info-phone-email">
            <span>{companyInfo.phone}</span> <span>{companyInfo.email}</span>
          </div>
        </div>

        <div className="contact-plan-image">some picture here</div>

        <div className="separator" />

        <div className="contact-header">Parklane HOA Services</div>
        <br />
        <div className="contact-hoa-services-list">
          <div>Specialists in HOA Common Areas</div>
          <div>General Ground Maintenance</div>
          <div>TCEQ Licensed Irrigation Auditing, Maintenance & Repair</div>
          <div>Annual SAWS Reporting</div>
          <div>Backflow Assembly Testing & Reporting</div>
          <div>Winter Rye Seeding</div>
          <div>Landscape Design & Renovation</div>
          <div>Tree Pruning, Shaping & Installation</div>
          <div>Turf Grass Installation & Maintenance</div>
          <div>Mulch Installation</div>
          <div>Annuals & Perennials Installation</div>
          <div>Landscape & Entry Monument Lighting, Auditing & Repair</div>
          <div>Certified Kiddie Cushion Installation</div>
          <div>Monthly Reporting</div>
          <div>Organic Fertilization</div>
          <div>Stone Masonry Installation and Repair</div>
          <div>Wood Fence Installation and Repair</div>
          <div>Weed Fence Installation and Repair</div>
          <div>Weed Control and Herbicide Management Programs</div>
          <div>Drainage, Easement, Field and</div>
          <div>Fence Line Shredding</div>
          <div>HOA Annual and Board Meeting Participation</div>
        </div>

      </StyledContact>
    </AnimatedStyledRoute>
  );
}
const StyledContact = styled.div`
  .contact-form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    .form-header {
      font-size: 1.7em;
      font-weight: 700;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colorPrimary};
      text-align: center;
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      width: 30%;
      min-width: 200px;
      background-color: ${({ theme }) => theme.colorPrimary};
      padding: 5px 8px 7px;
      .contact-form-input {
        resize: none;
        width: 100%;
        padding: 8px;
        margin: 2px 0;
        border: none;
        background-color: #fff;
        //border-bottom: 1px solid ${props => props.theme.colorGreyMediumLight};
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
          //border-bottom: 1px solid ${props => props.theme.colorTransparent};
          &.hasError {
            box-shadow: 0 0 2px ${props => props.theme.colorDanger};
          }
        }
      }
      .contact-form-controls {
        display: flex;
        justify-content: center;
        .submit-form-button {
          color: ${({ theme }) => theme.colorWhite};
          background-color: ${({ theme }) => theme.colorSecondary};
          &:hover {
            //color: ${({ theme }) => theme.colorSecondary};
            background-color: ${({ theme }) => theme.colorSecondaryOpaque};
          }
        }
      }
    }
  }
  .contact-header {
    font-size: 1.3em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin: 10px 30px;
  }
  .contact-info {
    color: ${({theme}) => theme.colorPrimary};
    margin: 0 100px;
    text-align: center;
    .contact-info-message {
      font-size: 1.4em;
      font-weight: 300;
      margin-bottom: 20px;
    }
    .contact-info-phone-email {
      font-size: 1.2em;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
  .contact-plan-image {
    display: flex;
    justify-content: center;
  }
  .contact-hoa-services-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 100px 50px;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    white-space: nowrap;
    div {
      margin-bottom: 10px;
    }
  }
  .separator {
    width: 40%;
    border-bottom: 2px solid red;
    margin: 40px auto;
  }
  @media (max-width: ${({theme}) => theme.mobileWidth}px) {
    .contact-hoa-services-list {
      margin: 0 20px 50px;
      grid-template-columns: 1fr;
      white-space: normal;
    }
    .contact-info {
      margin: 0 20px;
      .contact-info-phone-email {
        font-size: 1em;
      }
    }
  }
`;
export default ContactRoute;

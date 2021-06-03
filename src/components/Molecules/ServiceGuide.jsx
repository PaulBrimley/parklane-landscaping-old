import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/Routes';


/** components **/
import { StyledInfoCardLink } from '../Styled/StyledInfoCard';
import SVGIcon from '../Atoms/SVGIcon';

function ServiceGuide({ className, style }) {
  return (
    <StyledServiceGuide className={className} style={style}>
      <div className="service-header uppercase">
        Service Guide
      </div>
      <div className="services">
        <StyledInfoCardLink as={Link} to={routes.MAINTENANCE}>
          <div className="info-card-header">HOA Maintenance</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type="lawnMower"/>
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.IRRIGATION}>
          <div className="info-card-header">HOA Licensed Irrigation</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type="hose" />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.LANDSCAPE}>
          <div className="info-card-header">HOA Landscaping</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="75px" width="75px" type="landscape" />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.MONUMENT}>
          <div className="info-card-header">HOA Monuments</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="80px" width="80px" type="monument" />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.MONUMENT_REPAIR}>
          <div className="info-card-header">HOA Masonry</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type="masonry" />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.FENCE}>
          <div className="info-card-header">HOA Fence Installation</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="70px" width="70px" type="fence" />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.LIGHTING}>
          <div className="info-card-header">HOA Landscape Lighting</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="60px" width="60px" type="lightBulb" style={{ marginTop: '7px' }} />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>

        <StyledInfoCardLink as={Link} to={routes.TRIMMING}>
          <div className="info-card-header">HOA Tree Pruning</div>
          <div className="info-card-body">
            <div className="info-card-icon">
              <SVGIcon height="80px" width="80px" type="trees" />
            </div>
            <div className="info-card-message">Learn More</div>
          </div>
        </StyledInfoCardLink>
      </div>
    </StyledServiceGuide>
  );
}
const StyledServiceGuide = styled.div`
  .service-header {
    font-size: 3em;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colorPrimary};
    color: ${({ theme }) => theme.colorTertiary};
    text-align: center;
    padding: 20px 10px 10px;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
    grid-gap: 40px;
    padding-top: 40px;
  }
  @media screen and (max-width: 600px) {
    .services {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 500px) {
    .services {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default ServiceGuide;

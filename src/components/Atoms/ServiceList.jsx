import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** components **/
import PageDivider2 from './PageDivider2';

function ServiceList() {
	const { theme } = useAppState();
  return (
    <StyledServiceList>
      <div className="header">HOA Landscape Services</div>
      <PageDivider2 width="80%" margin="10px var(--side-margin) 30px" color={theme.colorWhite} />
      <div className="list">
				<div className="side">
					<div className="item">Specialists in HOA Common Areas</div>
					<div className="item">General Ground Maintenance</div>
					<div className="item">TCEQ Licensed Irrigation Auditing, Maintenance & Repair</div>
					<div className="item">Annual SAWS Reporting</div>
					<div className="item">Back Flow Assembly Testing & Reporting</div>
					<div className="item">Winter Rye Seeding</div>
					<div className="item">Landscape Design & Renovation</div>
					<div className="item">Tree Pruning, Shaping & Installation</div>
					<div className="item">Turf Grass Installation & Maintenance</div>
					<div className="item">Mulch Installation</div>
				</div>
				<div className="side">
					<div className="item">Annuals & Perennials Installation</div>
					<div className="item">Landscape & Entry Monument Lighting, Auditing & Repair</div>
					<div className="item">Certified Kiddie Cushion Installation</div>
					<div className="item">Monthly Reporting</div>
					<div className="item">Organic Fertilization</div>
					<div className="item">Stone Masonry Installation and Repair</div>
					<div className="item">Wood Fence Installation and Repair</div>
					<div className="item">Weed Control and Herbicide Management Programs</div>
					<div className="item">Drainage, Easement, Field and Fence Line Shredding</div>
					<div className="item">HOA Annual and Board Meeting Participation</div>
				</div>



      </div>
    </StyledServiceList>
  );
}
const StyledServiceList = styled.div`
	background: ${({ theme }) => theme.colorPrimary};
	padding: 10px 0 40px;
  .header {
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorWhite};
    text-align: center;
    margin: 10px var(--side-margin) 0;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 1.2em;
    font-weight: 300;
    margin: 0 var(--side-margin);
    color: ${({ theme }) => theme.colorWhite};
    text-align: center;
    white-space: nowrap;
		.side {
			.item {
				margin-bottom: 15px;
			}
		}
  }
  @media (max-width: 800px) {
    .list {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobileWidth}px) {
    .list {
      margin: 0 20px 50px;
      white-space: normal;
    }
  }
`;
export default ServiceList;

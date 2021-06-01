import styled from 'styled-components';

function ServiceList() {
  return (
    <StyledServiceList>
			<div className="header">
				All HOA Services
			</div>
			<div className="list">
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
				<div>Stone Masonry Installation & Repair</div>
				<div>Wood Fence Installation & Repair</div>
				<div>Weed Control & Herbicide Management Programs</div>
				<div>Drainage, Easement, Field & Fence Line Shredding</div>
				<div>HOA Annual & Board Meeting Participation</div>
			</div>
    </StyledServiceList>
  );
}
const StyledServiceList = styled.div`
	.header {
    font-size: 1.5em;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    margin: 10px var(--side-margin) 20px;
	}
	.list {
    font-size: 1.2em;
    font-weight: 500;
    margin: 0 var(--side-margin);
    color: ${({ theme }) => theme.colorPrimary};
    text-align: center;
    white-space: nowrap;
    div {
      margin-bottom: 10px;
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

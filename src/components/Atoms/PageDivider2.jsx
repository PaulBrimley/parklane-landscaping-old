import styled from 'styled-components';

function PageDivider2(props) {
  return (
    <StyledPageDivider2 {...props}>
			<div className="separator" />
		</StyledPageDivider2>
  );
}
const StyledPageDivider2 = styled.div`
	display: flex;
	justify-content: center;
	.separator {
    width: ${({ width }) => width || '100%'};
    border-bottom: 4px solid ${({ color, theme }) => color || theme.colorPrimary};
    margin: ${({margin}) => margin || '10px var(--side-margin)'};
	}
  @media screen and (max-width: 500px) {
    .separator {
      width: 70%;
    }
  }
`;
export default PageDivider2;

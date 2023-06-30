import styled from "styled-components";

export const StyledDrumMachine = styled.div`
	min-width: 350px;
	max-width: 500px;
	display: grid;
	grid-template-rows: auto auto auto auto;
	grid-template-columns: auto auto auto;
	padding: 10px;
	margin: 50px auto;
	border: solid;
	border-radius: 15px;
	background-color: #0079ff;
	&:hover  {
		background-color: #0079ff;
	}
`;

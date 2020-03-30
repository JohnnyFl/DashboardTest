import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	grid-column: 1 / 3;
	background-color: #4b555f;
	color: #878787;
	padding: 0.5em 2em;
`;

const Header = () => (
	<HeaderWrapper>
		<h2>Demo App</h2>
	</HeaderWrapper>
);

export default Header;

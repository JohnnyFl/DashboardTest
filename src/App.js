import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

const AppWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 5fr;
`;

function App() {
	const [selectedItem, setSelectedItem] = useState(null);
	const getSelected = useCallback(selected => {
		setSelectedItem(selected);
	}, []);
	return (
		<AppWrapper>
			<Header />
			<Aside getSelected={getSelected} />
			<Main selectedItem={selectedItem} />
		</AppWrapper>
	);
}

export default App;

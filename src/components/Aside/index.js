import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ActiveIcon from "../../Icons/ActiveIcon";
import apiResponse from "../../utils";
import ArrowRight from "../../Icons/ArrowRight";

const AsideWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	padding: 1em 0 1em 2em;
`;

const Title = styled.h3`
	color: #87878b;
	font-weight: normal;
	font-size: 1.5rem;
`;

const List = styled.ul`
	list-style: none;
`;

const ItemList = styled.li`
	transition: 0.2s ease-in all;
	border: 1px solid #f2f2f2;
	border-right: none;
	display: flex;
	justify-content: space-between;
	padding: 0.5em 0;
	color: #978797;
	cursor: pointer;
	user-select: none;
	&:hover {
		background-color: #f5f5f5;
		transition: 0.2s ease-in all;
	}
`;

const IconWrapper = styled.div`
	display: flex;
`;

const Aside = ({ getSelected }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		apiResponse.then(res => setItems(res.resources));
	}, []);

	const [selected, setSelected] = useState(null);

	useEffect(() => {
		if (selected !== null) {
			getSelected(selected);
			const item = document.getElementById(selected);
			item.style.backgroundColor = "#F5F5F5";

			return () => {
				item.removeAttribute("style");
			};
		}
	}, [selected, getSelected]);

	return (
		<AsideWrapper>
			<Title>Items</Title>
			<List>
				{items.length > 0
					? items.map(item => (
							<ItemList
								onClick={() => setSelected(item.id)}
								id={item.id}
								key={item.id}>
								<IconWrapper>
									<ActiveIcon />
									{item.name}
								</IconWrapper>
								<>{selected === item.id ? <ArrowRight /> : null}</>
							</ItemList>
					  ))
					: null}
			</List>
		</AsideWrapper>
	);
};

export default Aside;

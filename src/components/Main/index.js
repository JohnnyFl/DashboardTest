import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HelpIcon from "../../Icons/HelpIcon";
import apiResponse from "../../utils";

const MainWrapper = styled.main`
	display: flex;
	justify-content: center;
	padding-top: 3.39em;
	background-color: #f3f3f3;
	height: ${props => (props.actions !== null ? "100%" : "100vh")};
`;

const ContentWrapper = styled.div`
	display: flex;
	width: 85%;
	flex-direction: column;
	background-color: white;
`;

const Title = styled.h3`
	width: 100%;
	background-color: #00d1b2;
	color: white;
	align-self: flex-start;
	padding: 0.35em 1em;
`;

const InfoWrapper = styled.div`
	padding: 2em 1em;
	display: grid;
	grid-template-columns: 2fr 1fr;
`;

const GeneralInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: 1em;
`;

const ActionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const InfoTitle = styled.h4`
	color: #5c9eed;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 0.9rem;
	display: flex;
`;

const Label = styled.label`
	color: #e0d8d7;
	text-transform: uppercase;
	font-size: 0.8rem;
	margin: 1.2em 0 1em 0;
`;

const Input = styled.input`
	padding: 0.5em 1em;
	background-color: #f5f5f5;
	border: none;
`;

const Action = styled.div`
	background-color: #f5f5f5;
	padding: 0.8em 1em;
	margin-bottom: 1em;
`;

const ActionList = styled.div`
	margin-top: 3em;
`;

const Main = ({ selectedItem }) => {
	const [data, setData] = useState(null);
	const [actions, setActions] = useState(null);

	useEffect(() => {
		if (selectedItem !== null) {
			const getInfo = async () => {
				const res = await apiResponse;
				const info = res.resources.filter(item => item.id === selectedItem);
				setData(info[0]);
				setActions(res.actions);
			};
			getInfo();
		}
	}, [selectedItem]);

	return (
		<MainWrapper actions={actions}>
			{data !== null && actions !== null ? (
				<ContentWrapper>
					<Title>{data.name}</Title>
					<InfoWrapper>
						<GeneralInfoWrapper>
							<InfoTitle>
								General Details
								<HelpIcon />
							</InfoTitle>
							<Label htmlFor='name'>Name</Label>
							<Input value={data.name} id='name' readOnly />
							<Label htmlFor='desc'>Description</Label>
							<Input value={data.description} id='desc' readOnly />
							<Label htmlFor='rtype'>Resource Type</Label>
							<Input value={data.resourceType} id='rtype' readOnly />
							<Label htmlFor='path'>Path</Label>
							<Input value={data.path} id='path' readOnly />
						</GeneralInfoWrapper>
						<ActionWrapper>
							<InfoTitle>
								Permitted Actions
								<HelpIcon />
							</InfoTitle>
							<ActionList>
								{actions.map(action => (
									<Action key={action.id}>{action.name}</Action>
								))}
							</ActionList>
						</ActionWrapper>
					</InfoWrapper>
				</ContentWrapper>
			) : null}
		</MainWrapper>
	);
};

export default Main;

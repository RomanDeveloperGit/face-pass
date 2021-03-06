import styledComponents from 'styled-components';

export const TaskCheckboxLabel = styledComponents.label`
	width: 100%;

	cursor: pointer;
	
	display: flex;
	align-items: center;

	column-gap: 20px;

	@media (max-width: 420px) {
		column-gap: 16px;
	}
`;

export const TaskCheckboxText = styledComponents.span`
	font-size: 16px;

	font-weight: 600;
	color: #ffffff;

	${props => props.isCompleted && `text-decoration: line-through;`}

	@media (max-width: 560px) {
		font-size: 14px;
	}

	@media (max-width: 360px) {
		font-size: 12px;
	}
`;
import styledComponents from 'styled-components';

export const CheckboxContainer = styledComponents.span`
    position: relative;

    cursor: pointer;

    > input {
        width: 32px;
        height: 32px;

        opacity: 0;
    }

    > input:checked + span::after {
        opacity: 1;
    }
`;

export const CheckboxVisual = styledComponents.span`
    position: absolute;
    top: 0;
    left: 0;

    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #32B290;
    border-radius: 10px;

    &::after {
        width: 16px;
        height: 10px;

        content: "";

        border-left: 3px solid #32B290;
		border-bottom: 3px solid #32B290;
        border-radius: 1px;

        opacity: 0;
		
		transform: rotate(-45deg);
        transition: .125s;

		margin-bottom: 5px;
    }
`;
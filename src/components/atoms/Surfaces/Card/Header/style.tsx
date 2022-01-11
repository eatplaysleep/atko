/** @format */

import {
	dangerBoxShadow,
	infoBoxShadow,
	primaryBoxShadow,
	roseBoxShadow,
	successBoxShadow,
	warningBoxShadow,
} from '../../../../../styles';

const warningCardHeader = {
	color: '#fff',
	background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
	...warningBoxShadow,
};
const successCardHeader = {
	color: '#fff',
	background: 'linear-gradient(60deg, #66bb6a, #43a047)',
	...successBoxShadow,
};
const dangerCardHeader = {
	color: '#fff',
	background: 'linear-gradient(60deg, #ef5350, #e53935)',
	...dangerBoxShadow,
};
const infoCardHeader = {
	color: '#fff',
	background: 'linear-gradient(60deg, #26c6da, #00acc1)',
	...infoBoxShadow,
};
const primaryCardHeader = {
	color: '#fff',
	background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
	...primaryBoxShadow,
};
const roseCardHeader = {
	color: '#fff',
	background: 'linear-gradient(60deg, #ec407a, #d81b60)',
	...roseBoxShadow,
};

const cardHeaderStyle = {
	cardHeader: {
		borderRadius: '3px',
		padding: '1rem 15px',
		marginLeft: '15px',
		marginRight: '15px',
		marginTop: '-30px',
		border: '0',
		marginBottom: '0',
	},
	cardHeaderPlain: {
		marginLeft: '0px',
		marginRight: '0px',
	},
	warningCardHeader,
	successCardHeader,
	dangerCardHeader,
	infoCardHeader,
	primaryCardHeader,
	roseCardHeader,
};

export default cardHeaderStyle;

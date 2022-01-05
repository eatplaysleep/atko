/** @format */

import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import makeStyles from '@material-ui/core/styles/makeStyles';
import MuiButton from '@material-ui/core/Button';

// core components

import style from './style';

const makeComponentStyles = makeStyles(() => ({
	...style,
}));

export const Button = React.forwardRef((props, ref) => {
	const {
		color,
		round,
		children,
		fullWidth,
		disabled,
		simple,
		size,
		block,
		link,
		justIcon,
		className,
		...rest
	} = props;

	const classes = makeComponentStyles();

	const btnClasses = classNames({
		[classes.button]: true,
		[classes[size]]: size,
		[classes[color]]: color,
		[classes.round]: round,
		[classes.fullWidth]: fullWidth,
		[classes.disabled]: disabled,
		[classes.simple]: simple,
		[classes.block]: block,
		[classes.link]: link,
		[classes.justIcon]: justIcon,
		[className]: className,
	});
	return (
		<MuiButton {...rest} ref={ref} className={btnClasses}>
			{children}
		</MuiButton>
	);
});

Button.propTypes = {
	color: PropTypes.oneOf([
		'primary',
		'info',
		'success',
		'warning',
		'danger',
		'rose',
		'white',
		'facebook',
		'twitter',
		'google',
		'github',
		'transparent',
	]),
	size: PropTypes.oneOf(['sm', 'lg']),
	simple: PropTypes.bool,
	round: PropTypes.bool,
	fullWidth: PropTypes.bool,
	disabled: PropTypes.bool,
	block: PropTypes.bool,
	link: PropTypes.bool,
	justIcon: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
};

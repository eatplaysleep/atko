/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
} from '@material-ui/core';

// core components

import style from './style';

type ButtonColors =
	| Colors
	| ('facebook' | 'twitter' | 'google' | 'github' | 'transparent');

interface ButtonProps
	extends Omit<MuiButtonProps, 'href' | 'color' | 'size'>,
		MaterialComponentProps {
	color?: ButtonColors;
	round?: boolean;
	fullWidth?: boolean;
	disabled?: boolean;
	simple?: boolean;
	size?: 'sm' | 'lg';
	block?: boolean;
	link?: boolean;
	justIcon?: boolean;
}

const makeComponentStyles = makeStyles(() => ({
	...style,
}));

export const Button = React.forwardRef((props: ButtonProps, ref) => {
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
	} = props;

	const classes = makeComponentStyles();

	const btnClasses = classNames({
		[classes.button]: true,
		...(typeof size === 'string' ? { [classes[size]]: size } : {}),
		...(typeof color === 'string' ? { [classes[color]]: color } : {}),
		[classes.round]: round,
		[classes.fullWidth]: fullWidth,
		[classes.disabled]: disabled,
		[classes.simple]: simple,
		[classes.block]: block,
		[classes.link]: link,
		[classes.justIcon]: justIcon,
		...(typeof className === 'string' ? { [className]: className } : {}),
	});
	return (
		<MuiButton
			// TODO fix {...props} and ref typing
			// {...props}
			// ref={ref}
			className={btnClasses}
		>
			{children}
		</MuiButton>
	);
});

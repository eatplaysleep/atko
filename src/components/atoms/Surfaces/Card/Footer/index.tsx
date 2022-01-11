/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './style';

interface CardFooterProps extends MaterialComponentProps {}

const useStyles = makeStyles(styles);

export const CardFooter = (props: CardFooterProps) => {
	const classes = useStyles();
	const { className, children, ...rest } = props;
	const cardFooterClasses = classNames({
		[classes.cardFooter]: true,
		[className as string]: className !== undefined,
	});
	return (
		<div className={cardFooterClasses} {...rest}>
			{children}
		</div>
	);
};

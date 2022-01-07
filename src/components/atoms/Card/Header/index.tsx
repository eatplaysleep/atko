/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './style';

interface CardHeaderProps extends MaterialComponentProps {
	color?: Colors;
	plain?: boolean;
}

const useStyles = makeStyles(styles);

export const CardHeader = (props: CardHeaderProps) => {
	const classes = useStyles();
	const { className, children, color, plain, ...rest } = props;
	const cardHeaderClasses = classNames({
		[classes.cardHeader]: true,
		[classes[color + 'CardHeader']]: color,
		[classes.cardHeaderPlain]: plain,
		...(typeof className === 'string' ? { [className]: true } : {}),
	});
	return (
		<div className={cardHeaderClasses} {...rest}>
			{children}
		</div>
	);
};

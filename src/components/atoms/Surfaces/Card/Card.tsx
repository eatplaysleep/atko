/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

import { CardBody } from './Body';
import { CardFooter } from './Footer';
import { CardHeader } from './Header';

import styles from './style';

interface CardProps extends MaterialComponentProps {
	plain?: boolean;
	carousel?: boolean;
}

const useStyles = makeStyles(styles);

export const Card = (props: CardProps) => {
	const classes = useStyles();
	const { className, children, plain, carousel, ...rest } = props;
	const cardClasses = classNames({
		[classes.card]: true,
		[classes.cardPlain]: plain,
		[classes.cardCarousel]: carousel,
		[className as string]: className !== undefined,
	});
	return (
		<div className={cardClasses} {...rest}>
			{children}
		</div>
	);
};

Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Header = CardHeader;

export default Card;

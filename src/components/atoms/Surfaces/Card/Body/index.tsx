/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { CardTitle, CardSubtitle } from '..';
import styles from './style';

interface CardBodyProps extends MaterialComponentProps {
	/**
	 * Permits sending a simple string to be used as the title using the default <CardTitle> component.
	 *
	 * If the text needs to be customized, implement the <CardTitle> in order to provide props.
	 */
	title?: string;
	/**
	 * Permits sending a simple string to be used as the subtitle using the default <CardSubtitle> component.
	 *
	 * If the text needs to be customized, implement the <CardSubtitle> in order to provide props.
	 */
	subtitle?: string;
}

const useStyles = makeStyles(styles);

export const CardBody = (props: CardBodyProps) => {
	const classes = useStyles();
	const { className, children, title, subtitle, ...rest } = props;
	const cardBodyClasses = classNames({
		[classes.cardBody]: true,
		[className as string]: className !== undefined,
	});
	return (
		<div className={cardBodyClasses} {...rest}>
			<CardTitle>{title}</CardTitle>
			<CardSubtitle>{subtitle}</CardSubtitle>
			{children}
		</div>
	);
};

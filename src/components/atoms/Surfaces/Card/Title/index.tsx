/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './style';

interface CardTitleProps extends MaterialComponentProps {
	type?: TitleType;
}

const useStyles = makeStyles(styles);

export const CardTitle = (props: CardTitleProps) => {
	const classes = useStyles();
	const { className, children, type = 'h4', ...rest } = props;
	const cardTitleClasses = classNames({
		[classes.cardTitle]: true,
		[className as string]: className !== undefined,
	});
	const Wrapper = type;
	return (
		<Wrapper className={cardTitleClasses} {...rest}>
			{children}
		</Wrapper>
	);
};

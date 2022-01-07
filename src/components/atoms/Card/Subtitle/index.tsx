/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './style';

interface CardSubtitleProps extends MaterialComponentProps {
	type?: TitleType;
}

const useStyles = makeStyles(styles);

export const CardSubtitle = (props: CardSubtitleProps) => {
	const classes = useStyles();
	const { className, children, type = 'h6', ...rest } = props;
	const cardSubtitleClasses = classNames({
		[classes.cardSubtitle]: true,
		[className as string]: className !== undefined,
	});
	const Wrapper = type;
	return (
		<Wrapper className={cardSubtitleClasses} {...rest}>
			{children}
		</Wrapper>
	);
};

/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import { CardTitle, CardSubtitle } from '../../Card';
import styles from './style';

const useStyles = makeStyles(styles);

export const CardBody = props => {
	const classes = useStyles();
	const { className, children, title, subtitle, ...rest } = props;
	const cardBodyClasses = classNames({
		[classes.cardBody]: true,
		[className]: className !== undefined,
	});
	return (
		<div className={cardBodyClasses} {...rest}>
			<CardTitle>{title}</CardTitle>
			<CardSubtitle>{subtitle}</CardSubtitle>
			{children}
		</div>
	);
};

CardBody.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	children: PropTypes.node,
};

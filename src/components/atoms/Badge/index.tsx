/** @format */

import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';
import classNames from 'classnames';

interface BadgeProps extends MaterialComponentProps {
	color?: Colors;
}

const useStyles = makeStyles(styles);

export const Badge = (props: BadgeProps) => {
	const classes = useStyles();
	const { color = 'gray', children } = props;
	const badgeClasses = classNames({
		[classes.badge]: true,
		[classes[color]]: color,
	});
	return <span className={badgeClasses}>{children}</span>;
};

Badge.defaultProps = {
	color: 'gray',
};

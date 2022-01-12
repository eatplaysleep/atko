/** @format */

import React from 'react';
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import MuiGrid from '@material-ui/core/Grid';

import styles from './style';

const useStyles = makeStyles(styles);

export const Grid = (props: any) => {
	const classes = useStyles();

	const { container, item, children, className, ...rest } = props;

	const gridClasses = classNames({
		[classes.grid]: container && !item,
		[classes.gridItem]: !container && item,
		...(className ? { [className]: true } : {}),
	});

	return (
		<MuiGrid
			container={container}
			item={item}
			{...rest}
			className={gridClasses}
		>
			{children}
		</MuiGrid>
	);
};

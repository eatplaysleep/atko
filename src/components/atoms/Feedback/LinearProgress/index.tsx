/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import MuiLinearProgress, {
	LinearProgressProps,
} from '@material-ui/core/LinearProgress';
// core components
import styles from './style';

interface CustomLinearProgressProps extends Omit<LinearProgressProps, 'color'> {
	color?: Colors;
}

const useStyles = makeStyles(styles);

export const LinearProgress = (props: CustomLinearProgressProps) => {
	const classes = useStyles();

	const { color = 'gray', variant } = props;

	const linearProgressClasses = classNames({
		[classes.root]: true,
		[classes[color]]: true,
		[classes[color + 'Background']]: true,
		[classes.bar]: true,
	});

	let customProps: LinearProgressProps = {
		variant: variant ?? 'indeterminate',
		...props,
		color: color !== 'primary' ? 'secondary' : 'primary',
		className: linearProgressClasses,
	};

	return <MuiLinearProgress {...customProps} />;
};

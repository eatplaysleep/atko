/** @format */

import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const getKeyValue =
	<T extends object, U extends keyof T>(obj: T) =>
	(key: U) =>
		obj[key];

interface InfoAreaProps {
	//TODO: figure out issue with TypeScript
	// icon: React.ReactNode;
	icon: any;
	title: string;
	description: string;
	iconColor?: Colors;
	vertical?: boolean;
	[key: string]: any;
}

const useStyles = makeStyles(styles);

export const InfoArea = (props: InfoAreaProps) => {
	const classes = useStyles();

	const { title, description, iconColor = 'gray', vertical = false } = props;

	const iconWrapper = classNames({
		[classes.iconWrapper]: true,
		[getKeyValue(classes)(iconColor as keyof typeof classes)]: true,
		[classes.iconWrapperVertical]: vertical,
	});

	const iconClasses = classNames({
		[classes.icon]: true,
		[classes.iconVertical]: vertical,
	});
	return (
		<div className={classes.infoArea}>
			<div className={iconWrapper}>
				<props.icon className={iconClasses} />
			</div>
			<div className={classes.descriptionWrapper}>
				<h4 className={classes.title}>{title}</h4>
				<p className={classes.description}>{description}</p>
			</div>
		</div>
	);
};

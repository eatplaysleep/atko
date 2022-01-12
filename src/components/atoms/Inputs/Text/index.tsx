/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import styles from './style';

interface TextInputProps {
	id?: string;
	labelText?: string | React.ReactNode;
	// TODO: add actual props
	labelProps?: any;
	inputProps?: any;
	formControlProps?: any;
	inputRootCustomClasses?: string;
	error?: Boolean;
	success?: Boolean;
	white?: Boolean;
}

const useStyles = makeStyles(styles);

export const TextInput = (props: TextInputProps) => {
	const classes = useStyles();
	const {
		formControlProps,
		labelText,
		id,
		labelProps,
		inputProps,
		error,
		white,
		inputRootCustomClasses,
		success,
	} = props;

	const labelClasses = classNames({
		[classes.labelRootError]: error,
		[classes.labelRootSuccess]: success && !error,
	});

	const underlineClasses = classNames({
		[classes.underlineError]: error,
		[classes.underlineSuccess]: success && !error,
		[classes.underline]: true,
		[classes.whiteUnderline]: white,
	});
	const marginTop = classNames({
		...(typeof inputRootCustomClasses === 'string'
			? { [inputRootCustomClasses]: inputRootCustomClasses !== undefined }
			: {}),
	});

	const inputClasses = classNames({
		[classes.input]: true,
		[classes.whiteInput]: white,
	});

	let formControlClasses;

	if (formControlProps?.className) {
		formControlClasses = classNames(
			formControlProps?.className,
			classes.formControl
		);
	} else {
		formControlClasses = classes.formControl;
	}
	return (
		<FormControl {...formControlProps} className={formControlClasses}>
			{labelText !== undefined ? (
				<InputLabel
					className={classes.labelRoot + ' ' + labelClasses}
					htmlFor={id}
					{...labelProps}
				>
					{labelText}
				</InputLabel>
			) : null}
			<Input
				classes={{
					input: inputClasses,
					root: marginTop,
					disabled: classes.disabled,
					underline: underlineClasses,
				}}
				id={id}
				{...inputProps}
			/>
		</FormControl>
	);
};

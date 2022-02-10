/** @format */

import React from 'react';

import { PropTypes } from 'common';
import LoadingButtonRoot from 'components/atoms/Buttons/LoadingButton/LoadingButtonRoot';

const LoadingButton = React.forwardRef((props, ref) => {
	const { color, variant, size, circular, iconOnly, children, ...rest } = props;

	return (
		<LoadingButtonRoot
			{...rest}
			ref={ref}
			color='primary'
			variant={variant === 'gradient' ? 'contained' : variant}
			size={size}
			ownerState={{ color, variant, size, circular, iconOnly }}
			{...props}
		>
			{children}
		</LoadingButtonRoot>
	);
});

// Setting default values for the props of LoadingBUtton
LoadingButton.defaultProps = {
	size: 'medium',
	variant: 'contained',
	color: 'white',
	circular: false,
	iconOnly: false,
};

// Typechecking props for the LoadingButton
LoadingButton.propTypes = {
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'gradient']),
	color: PropTypes.oneOf([
		'default',
		'white',
		'primary',
		'secondary',
		'info',
		'success',
		'warning',
		'error',
		'light',
		'dark',
	]),
	circular: PropTypes.bool,
	iconOnly: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default LoadingButton;

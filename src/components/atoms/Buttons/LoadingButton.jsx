/** @format */

// import CircularProgress from '@mui/material';
import MuiLoadingButton from '@mui/lab/LoadingButton';

import { PropTypes } from 'common';

const LoadingButton = props => {
	const { loading } = props;

	const loaderProps = {
		color: 'secondary',
		size: 16,
		loading: loading || false,
		// ...loader,
	};

	// const loaderComponent = <CircularProgress {...loaderProps} />;

	const buttonProps = {
		// loadingIndicator: loaderComponent,
		...props,
	};

	return <MuiLoadingButton {...buttonProps} />;
};

LoadingButton.defaultProps = {
	loading: false,
};

LoadingButton.propTypes = {
	// loader: PropTypes.node,
	loading: PropTypes.bool,
};

export default LoadingButton;

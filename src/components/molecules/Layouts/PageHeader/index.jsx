/** @format */

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

// TODO implement unsplash API
// Images
import bgImage from 'assets/images/city-profile.jpg';

const PageHeader = ({ bgColor, children, container, ...props }) => (
	<MK.Box bgColor={bgColor}>
		<MK.Box
			minHeight='50vmin'
			width='100%'
			sx={{
				backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
					`${linearGradient(
						rgba(gradients.dark.main, 0.8),
						rgba(gradients.dark.state, 0.8)
					)}, url(${bgImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'top',
				display: 'grid',
				placeItems: 'center',
			}}
			{...props}
		/>
		{container && <Container>{children}</Container>}
		{!container && { children }}
	</MK.Box>
);

PageHeader.defaultProps = {
	bgColor: 'white',
	container: true,
};

PageHeader.propTypes = {
	bgColor: PropTypes.string,
	children: PropTypes.node,
	container: PropTypes.bool,
};

export default PageHeader;

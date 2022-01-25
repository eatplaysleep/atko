/**
 * =========================================================
 * Material Kit 2 React - v2.0.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 *
 * Coded by www.creative-tim.com
 *
 *  =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import { Collapse, Icon } from '@mui/material';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

const NavbarDropdown = ({
	name,
	icon,
	children,
	collapseStatus,
	light,
	href,
	route,
	collapse,
	...rest
}) => {
	const linkComponent = {
		component: 'a',
		href,
		target: '_blank',
		rel: 'noreferrer',
	};

	const routeComponent = {
		component: Link,
		to: route,
	};

	return (
		<>
			<MK.Box
				{...rest}
				mx={1}
				p={1}
				display='flex'
				alignItems='baseline'
				color={light ? 'white' : 'dark'}
				opacity={light ? 1 : 0.6}
				sx={{ cursor: 'pointer', userSelect: 'none' }}
				{...(route && routeComponent)}
				{...(href && linkComponent)}
			>
				<MK.Typography
					variant='body2'
					lineHeight={1}
					color='inherit'
					sx={{ alignSelf: 'center', '& *': { verticalAlign: 'middle' } }}
				>
					{icon}
				</MK.Typography>
				<MK.Typography
					variant='button'
					fontWeight='regular'
					textTransform='capitalize'
					color={light ? 'white' : 'dark'}
					sx={{ fontWeight: '100%', ml: 1, mr: 0.25 }}
				>
					{name}
				</MK.Typography>
				<MK.Typography variant='body2' color={light ? 'white' : 'dark'} ml='auto'>
					<Icon sx={{ fontWeight: 'normal', verticalAlign: 'middle' }}>
						{collapse && 'keyboard_arrow_down'}
					</Icon>
				</MK.Typography>
			</MK.Box>
			{children && (
				<Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
					{children}
				</Collapse>
			)}
		</>
	);
};

// Setting default values for the props of DefaultNavbarDropdown
NavbarDropdown.defaultProps = {
	children: false,
	collapseStatus: false,
	light: false,
	href: '',
	route: '',
};

// Typechecking props for the DefaultNavbarDropdown
NavbarDropdown.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
	children: PropTypes.node,
	collapseStatus: PropTypes.bool,
	light: PropTypes.bool,
	href: PropTypes.string,
	route: PropTypes.string,
	collapse: PropTypes.bool.isRequired,
};

export default NavbarDropdown;

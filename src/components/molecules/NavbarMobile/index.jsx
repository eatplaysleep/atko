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

import { useState } from 'react';

// react-router components
import { Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import { Collapse, Link as MuiLink } from '@mui/material';

import MK from 'components/material-ui-kit';

const NavbarMobile = ({ routes, open }) => {
	const [collapse, setCollapse] = useState('');

	const handleSetCollapse = name => (collapse === name ? setCollapse(false) : setCollapse(name));

	const renderNavbarItems = routes.map(
		({ name, icon, collapse: routeCollapses, href, route, collapse: navCollapse }) => (
			<MK.NavbarDropdown
				key={name}
				name={name}
				icon={icon}
				collapseStatus={name === collapse}
				onClick={() => handleSetCollapse(name)}
				href={href}
				route={route}
				collapse={Boolean(navCollapse)}
			>
				<MK.Box sx={{ height: '15rem', maxHeight: '15rem', overflowY: 'scroll' }}>
					{routeCollapses &&
						routeCollapses.map(item => (
							<MK.Box key={item.name} px={2}>
								{item.collapse ? (
									<>
										<MK.Typography
											display='block'
											variant='button'
											fontWeight='bold'
											textTransform='capitalize'
											py={1}
											px={0.5}
										>
											{item.name}
										</MK.Typography>
										{item.collapse.map(el => (
											<MK.Typography
												key={el.name}
												component={el.route ? Link : MuiLink}
												to={el.route ? el.route : ''}
												href={el.href ? el.href : ''}
												target={el.href ? '_blank' : ''}
												rel={el.href ? 'noreferrer' : 'noreferrer'}
												minWidth='11.25rem'
												display='block'
												variant='button'
												color='text'
												textTransform='capitalize'
												fontWeight='regular'
												py={0.625}
												px={2}
												sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
													borderRadius: borderRadius.md,
													cursor: 'pointer',
													transition: 'all 300ms linear',

													'&:hover': {
														backgroundColor: grey[200],
														color: dark.main,
													},
												})}
											>
												{el.name}
											</MK.Typography>
										))}
									</>
								) : (
									<MK.Box
										key={item.key}
										display='block'
										component={item.route ? Link : MuiLink}
										to={item.route ? item.route : ''}
										href={item.href ? item.href : ''}
										target={item.href ? '_blank' : ''}
										rel={item.href ? 'noreferrer' : 'noreferrer'}
										sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
											borderRadius: borderRadius.md,
											cursor: 'pointer',
											transition: 'all 300ms linear',
											py: 1,
											px: 1.625,

											'&:hover': {
												backgroundColor: grey[200],
												color: dark.main,

												'& *': {
													color: dark.main,
												},
											},
										})}
									>
										<MK.Typography
											display='block'
											variant='button'
											fontWeight='bold'
											textTransform='capitalize'
										>
											{item.name}
										</MK.Typography>
										<MK.Typography
											display='block'
											variant='button'
											color='text'
											fontWeight='regular'
											sx={{ transition: 'all 300ms linear' }}
										>
											{item.description}
										</MK.Typography>
									</MK.Box>
								)}
							</MK.Box>
						))}
				</MK.Box>
			</MK.NavbarDropdown>
		)
	);

	return (
		<Collapse in={Boolean(open)} timeout='auto' unmountOnExit>
			<MK.Box width='calc(100% + 1.625rem)' my={2} ml={-2}>
				{renderNavbarItems}
			</MK.Box>
		</Collapse>
	);
};

// Typechecking props for the DefaultNavbarMobile
NavbarMobile.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
	open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default NavbarMobile;

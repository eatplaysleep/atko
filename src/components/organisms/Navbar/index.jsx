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

import { Fragment, useState, useEffect } from 'react';

// react-router components
import { Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import { Container, Divider, Grid, Grow, Icon, Link as MuiLink, Popper } from '@mui/material';

import MK from 'components/material-ui-kit';
// eslint-disable-next-line import/no-cycle
import { Modal, NavbarDropdown, NavbarMobile } from 'components';

// Material Kit 2 React base styles
import breakpoints from 'assets/theme/base/breakpoints';

const Navbar = ({ brand, routes, transparent, light, action, sticky, relative, center }) => {
	const [dropdown, setDropdown] = useState('');
	const [dropdownEl, setDropdownEl] = useState('');
	const [dropdownName, setDropdownName] = useState('');
	const [nestedDropdown, setNestedDropdown] = useState('');
	const [nestedDropdownEl, setNestedDropdownEl] = useState('');
	const [nestedDropdownName, setNestedDropdownName] = useState('');
	const [arrowRef, setArrowRef] = useState(null);
	const [mobileNavbar, setMobileNavbar] = useState(false);
	const [mobileView, setMobileView] = useState(false);

	const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

	useEffect(() => {
		// A function that sets the display state for the DefaultNavbarMobile.
		const displayMobileNavbar = () => {
			if (window.innerWidth < breakpoints.values.lg) {
				setMobileView(true);
				setMobileNavbar(false);
			} else {
				setMobileView(false);
				setMobileNavbar(false);
			}
		};

		/**
     The event listener that's calling the displayMobileNavbar function when
     resizing the window.
    */
		window.addEventListener('resize', displayMobileNavbar);

		// Call the displayMobileNavbar function to set the state with the initial value.
		displayMobileNavbar();

		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', displayMobileNavbar);
	}, []);

	const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
		<NavbarDropdown
			key={name}
			name={name}
			icon={icon}
			href={href}
			route={route}
			collapse={Boolean(collapse)}
			onMouseEnter={({ currentTarget }) => {
				if (collapse) {
					setDropdown(currentTarget);
					setDropdownEl(currentTarget);
					setDropdownName(name);
				}
			}}
			onMouseLeave={() => collapse && setDropdown(null)}
			light={light}
		/>
	));

	// Render the routes on the dropdown menu
	const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
		let template;

		// Render the dropdown menu that should be display as columns
		if (collapse && columns && name === dropdownName) {
			const calculateColumns = collapse.reduce((resultArray, item, index) => {
				const chunkIndex = Math.floor(index / rowsPerColumn);
				const result = resultArray;

				if (!resultArray[chunkIndex]) {
					result[chunkIndex] = [];
				}

				result[chunkIndex].push(item);

				return result;
			}, []);

			template = (
				<Grid key={name} container spacing={3} py={1} px={1.5}>
					{calculateColumns.map((cols, key) => {
						const gridKey = `grid-${key}`;
						const dividerKey = `divider-${key}`;

						return (
							<Grid key={gridKey} item xs={12 / columns} sx={{ position: 'relative' }}>
								{cols.map((col, index) => (
									<Fragment key={col.name}>
										<MK.Typography
											display='block'
											variant='button'
											fontWeight='bold'
											textTransform='capitalize'
											py={1}
											px={0.5}
											mt={index !== 0 ? 2 : 0}
										>
											{col.name}
										</MK.Typography>
										{col.collapse.map(item => (
											<MK.Typography
												key={item.name}
												component={item.route ? Link : MuiLink}
												to={item.route ? item.route : ''}
												href={item.href ? item.href : e => e.preventDefault()}
												target={item.href ? '_blank' : ''}
												rel={item.href ? 'noreferrer' : 'noreferrer'}
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
												{item.name}
											</MK.Typography>
										))}
									</Fragment>
								))}
								{key !== 0 && (
									<Divider
										key={dividerKey}
										orientation='vertical'
										sx={{
											position: 'absolute',
											top: '50%',
											left: '-4px',
											transform: 'translateY(-45%)',
											height: '90%',
										}}
									/>
								)}
							</Grid>
						);
					})}
				</Grid>
			);

			// Render the dropdown menu that should be display as list items
		} else if (collapse && name === dropdownName) {
			template = collapse.map(item => {
				const linkComponent = {
					component: MuiLink,
					href: item.href,
					target: '_blank',
					rel: 'noreferrer',
				};

				const routeComponent = {
					component: Link,
					to: item.route,
				};

				return (
					<MK.Typography
						key={item.name}
						{...(item.route ? routeComponent : linkComponent)}
						display='flex'
						justifyContent='space-between'
						alignItems='center'
						variant='button'
						textTransform='capitalize'
						minWidth={item.description ? '14rem' : '12rem'}
						color={item.description ? 'dark' : 'text'}
						fontWeight={item.description ? 'bold' : 'regular'}
						py={item.description ? 1 : 0.625}
						px={2}
						sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
							borderRadius: borderRadius.md,
							cursor: 'pointer',
							transition: 'all 300ms linear',

							'&:hover': {
								backgroundColor: grey[200],
								color: dark.main,

								'& *': {
									color: dark.main,
								},
							},
						})}
						onMouseEnter={({ currentTarget }) => {
							if (item.dropdown) {
								setNestedDropdown(currentTarget);
								setNestedDropdownEl(currentTarget);
								setNestedDropdownName(item.name);
							}
						}}
						onMouseLeave={() => {
							if (item.dropdown) {
								setNestedDropdown(null);
							}
						}}
					>
						{item.description ? (
							<MK.Box>
								{item.name}
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
						) : (
							item.name
						)}
						{item.collapse && (
							<Icon
								fontSize='small'
								sx={{ fontWeight: 'normal', verticalAlign: 'middle', mr: -0.5 }}
							>
								keyboard_arrow_right
							</Icon>
						)}
					</MK.Typography>
				);
			});
		}

		return template;
	});

	// Routes dropdown menu
	const dropdownMenu = (
		<Popper
			anchorEl={dropdown}
			popperRef={null}
			open={Boolean(dropdown)}
			placement='top-start'
			transition
			style={{ zIndex: 10 }}
			modifiers={[
				{
					name: 'arrow',
					enabled: true,
					options: {
						element: arrowRef,
					},
				},
			]}
			onMouseEnter={() => setDropdown(dropdownEl)}
			onMouseLeave={() => {
				if (!nestedDropdown) {
					setDropdown(null);
					setDropdownName('');
				}
			}}
		>
			{({ TransitionProps }) => (
				<Grow
					{...TransitionProps}
					sx={{
						transformOrigin: 'left top',
						background: ({ palette: { white } }) => white.main,
					}}
				>
					<MK.Box borderRadius='lg'>
						<MK.Typography variant='h1' color='white'>
							<Icon ref={setArrowRef} sx={{ mt: -3 }}>
								arrow_drop_up
							</Icon>
						</MK.Typography>
						<MK.Box shadow='lg' borderRadius='lg' p={2} mt={2}>
							{renderRoutes}
						</MK.Box>
					</MK.Box>
				</Grow>
			)}
		</Popper>
	);

	// Render routes that are nested inside the dropdown menu routes
	const renderNestedRoutes = routes.map(({ collapse, columns }) =>
		collapse && !columns
			? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
					let template;

					if (parentName === nestedDropdownName) {
						template =
							nestedCollapse &&
							nestedCollapse.map(item => {
								const linkComponent = {
									component: MuiLink,
									href: item.href,
									target: '_blank',
									rel: 'noreferrer',
								};

								const routeComponent = {
									component: Link,
									to: item.route,
								};

								return (
									<MK.Typography
										key={item.name}
										{...(item.route ? routeComponent : linkComponent)}
										display='flex'
										justifyContent='space-between'
										alignItems='center'
										variant='button'
										textTransform='capitalize'
										minWidth={item.description ? '14rem' : '12rem'}
										color={item.description ? 'dark' : 'text'}
										fontWeight={item.description ? 'bold' : 'regular'}
										py={item.description ? 1 : 0.625}
										px={2}
										sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
											borderRadius: borderRadius.md,
											cursor: 'pointer',
											transition: 'all 300ms linear',

											'&:hover': {
												backgroundColor: grey[200],
												color: dark.main,

												'& *': {
													color: dark.main,
												},
											},
										})}
									>
										{item.description ? (
											<MK.Box>
												{item.name}
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
										) : (
											item.name
										)}
										{item.collapse && (
											<Icon
												fontSize='small'
												sx={{ fontWeight: 'normal', verticalAlign: 'middle', mr: -0.5 }}
											>
												keyboard_arrow_right
											</Icon>
										)}
									</MK.Typography>
								);
							});
					}

					return template;
			  })
			: null
	);

	// Dropdown menu for the nested dropdowns
	const nestedDropdownMenu = (
		<Popper
			anchorEl={nestedDropdown}
			popperRef={null}
			open={Boolean(nestedDropdown)}
			placement='right-start'
			transition
			style={{ zIndex: 10 }}
			onMouseEnter={() => {
				setNestedDropdown(nestedDropdownEl);
			}}
			onMouseLeave={() => {
				setNestedDropdown(null);
				setNestedDropdownName('');
				setDropdown(null);
			}}
		>
			{({ TransitionProps }) => (
				<Grow
					{...TransitionProps}
					sx={{
						transformOrigin: 'left top',
						background: ({ palette: { white } }) => white.main,
					}}
				>
					<MK.Box ml={2.5} mt={-2.5} borderRadius='lg'>
						<MK.Box shadow='lg' borderRadius='lg' py={1.5} px={1} mt={2}>
							{renderNestedRoutes}
						</MK.Box>
					</MK.Box>
				</Grow>
			)}
		</Popper>
	);

	return (
		<Container sx={sticky ? { position: 'sticky', top: 0, zIndex: 10 } : null}>
			<MK.Box
				py={1}
				px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
				my={relative ? 0 : 2}
				mx={relative ? 0 : 3}
				width={relative ? '100%' : 'calc(100% - 48px)'}
				borderRadius='xl'
				shadow={transparent ? 'none' : 'md'}
				color={light ? 'white' : 'dark'}
				position={relative ? 'relative' : 'absolute'}
				left={0}
				zIndex={3}
				sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
					backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
					backdropFilter: transparent ? 'none' : `saturate(200%) blur(30px)`,
				})}
			>
				<MK.Box display='flex' justifyContent='space-between' alignItems='center'>
					<MK.Box
						component={Link}
						to='/'
						lineHeight={1}
						py={transparent ? 1.5 : 0.75}
						pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
					>
						<MK.Typography variant='button' fontWeight='bold' color={light ? 'white' : 'dark'}>
							{brand}
						</MK.Typography>
					</MK.Box>
					<MK.Box
						color='inherit'
						display={{ xs: 'none', lg: 'flex' }}
						ml='auto'
						mr={center ? 'auto' : 0}
					>
						{renderNavbarItems}
					</MK.Box>
					<Modal label='Test Modal' />
					<MK.Box ml={{ xs: 'auto', lg: 0 }}>
						{action &&
							(action.type === 'internal' ? (
								<MK.Button
									component={Link}
									to={action.route}
									variant={
										action.color === 'white' || action.color === 'default'
											? 'contained'
											: 'gradient'
									}
									color={action.color ? action.color : 'info'}
									size='small'
								>
									{action.label}
								</MK.Button>
							) : (
								<MK.Button
									component='a'
									href={action.route}
									target='_blank'
									rel='noreferrer'
									variant={
										action.color === 'white' || action.color === 'default'
											? 'contained'
											: 'gradient'
									}
									color={action.color ? action.color : 'info'}
									size='small'
								>
									{action.label}
								</MK.Button>
							))}
					</MK.Box>
					<MK.Box
						display={{ xs: 'inline-block', lg: 'none' }}
						lineHeight={0}
						py={1.5}
						pl={1.5}
						color={transparent ? 'white' : 'inherit'}
						sx={{ cursor: 'pointer' }}
						onClick={openMobileNavbar}
					>
						<Icon fontSize='default'>{mobileNavbar ? 'close' : 'menu'}</Icon>
					</MK.Box>
				</MK.Box>
				<MK.Box
					bgColor={transparent ? 'white' : 'transparent'}
					shadow={transparent ? 'lg' : 'none'}
					borderRadius='xl'
					px={transparent ? 2 : 0}
				>
					{mobileView && <NavbarMobile routes={routes} open={mobileNavbar} />}
				</MK.Box>
			</MK.Box>
			{dropdownMenu}
			{nestedDropdownMenu}
		</Container>
	);
};

// Setting default values for the props of DefaultNavbar
Navbar.defaultProps = {
	brand: 'Material Kit 2',
	transparent: false,
	light: false,
	action: false,
	sticky: false,
	relative: false,
	center: false,
};

// Typechecking props for the DefaultNavbar
Navbar.propTypes = {
	brand: PropTypes.string,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
	transparent: PropTypes.bool,
	light: PropTypes.bool,
	action: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			type: PropTypes.oneOf(['external', 'internal']).isRequired,
			route: PropTypes.string.isRequired,
			color: PropTypes.oneOf([
				'primary',
				'secondary',
				'info',
				'success',
				'warning',
				'error',
				'dark',
				'light',
				'default',
				'white',
			]),
			label: PropTypes.string.isRequired,
		}),
	]),
	sticky: PropTypes.bool,
	relative: PropTypes.bool,
	center: PropTypes.bool,
};

export default Navbar;

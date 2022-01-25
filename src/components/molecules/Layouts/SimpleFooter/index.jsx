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

// @mui material components
import { Container, Icon, Link } from '@mui/material';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

// Material Kit 2 React base styles
import typography from 'assets/theme/base/typography';

const SimpleFooter = ({ company, links, light, ...props }) => {
	const { href, name } = company;
	const { size } = typography;

	const renderLinks = () =>
		links.map((link, key) => (
			<MK.Box
				key={link.name}
				component='li'
				pl={key === 0 ? 0 : 2}
				pr={key === links.length - 1 ? 0 : 2}
				lineHeight={1}
			>
				<Link href={link.href} target='_blank'>
					<MK.Typography variant='button' fontWeight='regular' color={light ? 'white' : 'text'}>
						{link.name}
					</MK.Typography>
				</Link>
			</MK.Box>
		));

	return (
		<MK.Box width='100%' position='absolute' zIndex={2} bottom='1.625rem' {...props}>
			<Container>
				<MK.Box
					width='100%'
					display='flex'
					flexDirection={{ xs: 'column', lg: 'row' }}
					justifyContent='space-between'
					alignItems='center'
				>
					<MK.Box
						display='flex'
						justifyContent='center'
						alignItems='center'
						flexWrap='wrap'
						color={light ? 'white' : 'text'}
						fontSize={size.sm}
					>
						&copy; {new Date().getFullYear()}, made with
						<MK.Box fontSize={size.md} color={light ? 'white' : 'text'} mb={-0.5} mx={0.25}>
							<Icon color='inherit' fontSize='inherit'>
								favorite
							</Icon>
						</MK.Box>
						by
						<Link href={href} target='_blank'>
							<MK.Typography variant='button' fontWeight='medium' color={light ? 'white' : 'dark'}>
								&nbsp;{name}&nbsp;
							</MK.Typography>
						</Link>
						for a better web.
					</MK.Box>
					<MK.Box
						component='ul'
						sx={({ breakpoints }) => ({
							display: 'flex',
							flexWrap: 'wrap',
							alignItems: 'center',
							justifyContent: 'center',
							listStyle: 'none',
							mt: 3,
							mb: 0,
							p: 0,

							[breakpoints.up('lg')]: {
								mt: 0,
							},
						})}
					>
						{renderLinks()}
					</MK.Box>
				</MK.Box>
			</Container>
		</MK.Box>
	);
};

// Setting default values for the props of SimpleFooter
SimpleFooter.defaultProps = {
	company: { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
	links: [
		{ href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
		{ href: 'https://www.creative-tim.com/presentation', name: 'About Us' },
		{ href: 'https://www.creative-tim.com/blog', name: 'Blog' },
		{ href: 'https://www.creative-tim.com/license', name: 'License' },
	],
	light: false,
};

// Typechecking props for the SimpleFooter
SimpleFooter.propTypes = {
	company: PropTypes.objectOf(PropTypes.string),
	links: PropTypes.arrayOf(PropTypes.object),
	light: PropTypes.bool,
};

export default SimpleFooter;

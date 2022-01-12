/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar as MuiAppBar,
	Button as MuiButton,
	Drawer as MuiDrawer,
	Hidden as MuiHidden,
	IconButton as MuiIconButton,
	Toolbar as MuiToolbar,
} from '@material-ui/core';
// @material-ui/icons
import { Menu } from '@material-ui/icons';
// core components
import styles from './style';

const getKeyValue =
	<T extends object, U extends keyof T>(obj: T) =>
	(key: U) =>
		obj[key];

interface NavBarProps extends MaterialComponentProps {
	color?: Colors;
	rightLinks?: React.ReactNode;
	leftLinks?: React.ReactNode;
	brand?: string;
	fixed?: boolean;
	absolute?: boolean;
	changeColorOnScroll?: { height: number; color: Colors };
	[key: string]: any;
}

const useStyles = makeStyles(styles);

export const NavBar = (props: NavBarProps) => {
	const classes = useStyles();

	const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

	React.useEffect(() => {
		const cleanup = () => {
			if (props?.changeColorOnScroll) {
				window.removeEventListener('scroll', navBarColorChange);
			}
		};

		cleanup();

		return cleanup;
	});

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const navBarColorChange = () => {
		const { color = 'white', changeColorOnScroll } = props;

		const windowsScrollTop = window.pageYOffset;

		if (changeColorOnScroll && windowsScrollTop > changeColorOnScroll.height) {
			document.body
				.getElementsByTagName('header')[0]
				.classList.remove(getKeyValue(classes)(color as keyof typeof classes));
			document.body
				.getElementsByTagName('header')[0]
				.classList.add(
					getKeyValue(classes)(
						changeColorOnScroll.color as keyof typeof classes
					)
				);
		} else {
			document.body
				.getElementsByTagName('header')[0]
				.classList.add(getKeyValue(classes)(color as keyof typeof classes));
			// document.body
			// 	.getElementsByTagName('header')[0]
			// 	.classList.remove(classes[changeColorOnScroll?.color]);
		}
	};

	const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;

	const appBarClasses = classNames({
		[classes.appBar]: true,
		[getKeyValue(classes)(color as keyof typeof classes)]: color,
		[classes.absolute]: absolute,
		[classes.fixed]: fixed,
	});
	const brandComponent = (
		<MuiButton className={classes.title}>{brand}</MuiButton>
	);
	return (
		<MuiAppBar className={appBarClasses}>
			<MuiToolbar className={classes?.container}>
				{leftLinks !== undefined ? brandComponent : null}
				<div className={classes?.flex}>
					{leftLinks !== undefined ? (
						<MuiHidden smDown implementation='css'>
							{leftLinks}
						</MuiHidden>
					) : (
						brandComponent
					)}
				</div>
				<MuiHidden smDown implementation='css'>
					{rightLinks}
				</MuiHidden>
				<MuiHidden mdUp>
					<MuiIconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerToggle}
					>
						<Menu />
					</MuiIconButton>
				</MuiHidden>
			</MuiToolbar>
			<MuiHidden mdUp implementation='js'>
				<MuiDrawer
					variant='temporary'
					anchor={'right'}
					open={mobileOpen}
					classes={{
						paper: classes?.drawerPaper,
					}}
					onClose={handleDrawerToggle}
				>
					<div className={classes.appResponsive}>
						{leftLinks}
						{rightLinks}
					</div>
				</MuiDrawer>
			</MuiHidden>
		</MuiAppBar>
	);
};

/** @format */

import React from 'react';
// import { ReferenceObject } from 'popper';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
	ClickAwayListener,
	Divider,
	Grow,
	Icon,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from '@material-ui/core';

// core components
import { Button } from '../../../../components';

import styles from './style';

const getKeyValue =
	<T extends object, U extends keyof T>(obj: T) =>
	(key: U) =>
		obj[key];

// TODO: add TypeScript support
// interface DropdownProps extends MaterialComponentProps {
// 	hoverColor?: Colors | 'black';
// 	buttonText?: React.ReactNode;
// 	buttonIcon?: React.ReactNode | string;
// 	dropdownList: Array<any>;
// 	buttonProps?: any;
// 	dropup?: boolean;
// 	dropdownHeader?: React.ReactNode;
// 	rtlActive?: boolean;
// 	caret?: boolean;
// 	left?: boolean;
// 	noLiPadding?: boolean;
// 	onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
// }

const useStyles = makeStyles(styles);

export const Dropdown = (props: any) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

	const handleClick = (event: any) => {
		if (anchorEl && anchorEl?.contains(event?.target)) {
			setAnchorEl(null);
		} else {
			setAnchorEl(event?.currentTarget);
		}
	};

	const handleClose = (event: any) => {
		setAnchorEl(null);
		if (props?.onClick) {
			props.onClick(event);
		}
	};

	const handleCloseAway = (event: any) => {
		if (anchorEl && anchorEl?.contains(event.target)) {
			return;
		}
		setAnchorEl(null);
	};

	const classes = useStyles();

	const {
		buttonText = 'Dropdown',
		buttonIcon,
		dropdownList,
		buttonProps,
		dropup,
		dropdownHeader,
		caret = true,
		hoverColor,
		left = true,
		rtlActive,
		noLiPadding,
	} = props;

	const caretClasses = classNames({
		[classes.caret]: true,
		[classes.caretActive]: Boolean(anchorEl),
		[classes.caretRTL]: rtlActive,
	});
	const dropdownItem = classNames({
		[classes.dropdownItem]: true,
		[getKeyValue(classes)((hoverColor + 'Hover') as keyof typeof classes)]:
			true,
		[classes.noLiPadding]: noLiPadding,
		[classes.dropdownItemRTL]: rtlActive,
	});

	let icon = null;
	switch (typeof buttonIcon) {
		case 'object':
			icon = <props.buttonIcon className={classes.buttonIcon} />;
			break;
		case 'string':
			icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
			break;
		default:
			icon = null;
			break;
	}
	return (
		<div>
			<div>
				<Button
					aria-label='Notifications'
					aria-owns={anchorEl ? 'menu-list' : null}
					aria-haspopup='true'
					{...buttonProps}
					onClick={handleClick}
				>
					{icon}
					{buttonText !== undefined ? buttonText : null}
					{caret ? <b className={caretClasses} /> : null}
				</Button>
			</div>
			<Popper
				open={Boolean(anchorEl)}
				anchorEl={anchorEl}
				transition
				disablePortal
				placement={
					dropup
						? left
							? 'top-start'
							: 'top'
						: left
						? 'bottom-start'
						: 'bottom'
				}
				className={classNames({
					[classes.popperClose]: !anchorEl,
					[classes.popperResponsive]: true,
				})}
			>
				{() => (
					<Grow
						in={Boolean(anchorEl)}
						// id='menu-list'
						style={
							dropup
								? { transformOrigin: '0 100% 0' }
								: { transformOrigin: '0 0 0' }
						}
					>
						<Paper className={classes.dropdown}>
							<ClickAwayListener onClickAway={handleCloseAway}>
								<MenuList role='menu' className={classes.menuList}>
									{dropdownHeader !== undefined ? (
										<MenuItem
											onClick={() => handleClose(dropdownHeader)}
											className={classes.dropdownHeader}
										>
											{dropdownHeader}
										</MenuItem>
									) : null}
									{dropdownList.map((prop: any, key: any) => {
										if (prop.divider) {
											return (
												<Divider
													key={key}
													onClick={() => handleClose('divider')}
													className={classes.dropdownDividerItem}
												/>
											);
										}
										return (
											<MenuItem
												key={key}
												onClick={() => handleClose(prop)}
												className={dropdownItem}
											>
												{prop}
											</MenuItem>
										);
									})}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

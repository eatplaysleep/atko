/**
 * /*eslint-disable
 *
 * @format
 */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from './style';

interface FooterItem {
	href?: string;
	className?: string;
	target?: string;
	content?: string | React.ReactNode;
}

interface FooterProps extends MaterialComponentProps {
	items?: FooterItem[];
	whiteFont?: boolean;
}

const useStyles = makeStyles(styles);

export const Footer = (props: FooterProps) => {
	const classes = useStyles();

	const { whiteFont = false, items = [] } = props;

	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont,
	});

	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont,
	});

	const buildFooterItems = (items: FooterItem[]) => (
		<List className={classes.list}>
			{items.map(item => (
				<ListItem className={classes.inlineBlock}>
					<a
						href={item?.href}
						className={item?.className ?? classes.block}
						target={item?.target ?? '_blank'}
					>
						{item?.content}
					</a>
				</ListItem>
			))}
		</List>
	);

	return (
		<footer className={footerClasses}>
			<div className={classes.container}>
				<div className={classes.left}>{buildFooterItems(items)}</div>
				<div className={classes.right}>
					&copy; {new Date().getFullYear()} , made with{' '}
					<Favorite className={classes.icon} /> by{' '}
					<a
						href='https://www.creative-tim.com?ref=mkr-footer'
						className={aClasses}
						target='_blank'
					>
						Creative Tim
					</a>{' '}
					for a better web.
				</div>
			</div>
		</footer>
	);
};

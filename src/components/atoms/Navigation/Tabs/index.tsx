/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Tab as MuiTab, Tabs as MuiTabs } from '@material-ui/core';
// core components
import { Card } from '../../../../components';

import styles from './style';

interface Tab {
	tabName: string;
	tabIcon: React.ReactNode;
	tabContent: React.ReactNode;
}

interface TabProps {
	headerColor?: Colors;
	title?: string;
	subtitle?: string;
	tabs?: Tab[];
	rtlActive?: boolean;
	plainTabs?: boolean;
}

const useStyles = makeStyles(styles);

export const Tabs = (props: TabProps) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: any, value: number) => {
		setValue(value);
	};
	const classes = useStyles();
	const { headerColor = 'primary', plainTabs, tabs, title, rtlActive } = props;
	const cardTitle = classNames({
		[classes.cardTitle]: true,
		[classes.cardTitleRTL]: rtlActive,
	});
	return (
		<Card plain={plainTabs}>
			<Card.Header color={headerColor} plain={plainTabs}>
				{title !== undefined ? <div className={cardTitle}>{title}</div> : null}
				<MuiTabs
					value={value}
					onChange={handleChange}
					classes={{
						root: classes.tabsRoot,
						indicator: classes.displayNone,
					}}
				>
					{tabs?.map((prop: any, key: any) => {
						var icon = {};
						if (prop.tabIcon) {
							icon = {
								icon:
									typeof prop.tabIcon === 'string' ? (
										<Icon>{prop.tabIcon}</Icon>
									) : (
										<prop.tabIcon />
									),
							};
						}
						return (
							<MuiTab
								classes={{
									root: classes.tabRootButton,
									// label: classes.tabLabel,
									selected: classes.tabSelected,
									wrapper: classes.tabWrapper,
								}}
								key={key}
								label={prop.tabName}
								{...icon}
							/>
						);
					})}
				</MuiTabs>
			</Card.Header>
			<Card.Body>
				{tabs?.map((prop: any, key: any) => {
					if (key === value) {
						return <div key={key}>{prop.tabContent}</div>;
					}
					return null;
				})}
			</Card.Body>
		</Card>
	);
};

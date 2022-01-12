/** @format */

import * as React from 'react';
import {
	Badge,
	Button,
	Card,
	Dropdown,
	Footer,
	LinearProgress,
	Tabs,
	TextInput,
} from '../../components';

import Face from '@material-ui/icons/Face';
import Chat from '@material-ui/icons/Chat';
import Build from '@material-ui/icons/Build';

export const Home = () => {
	const footerItems = [
		{
			href: 'https://www.creative-tim.com/?ref=mkr-footer',
			content: 'Creative Tim',
		},
		{
			href: 'https://www.creative-tim.com/presentation?ref=mkr-footer',
			content: 'About us',
		},
		{
			href: 'http://blog.creative-tim.com/?ref=mkr-footer',
			content: 'Blog',
		},
		{
			href: 'https://www.creative-tim.com/license?ref=mkr-footer',
			content: 'Licenses',
		},
	];

	return (
		<React.Fragment>
			<Button color='primary'>
				Notifications<Badge>4</Badge>
			</Button>

			<Card>
				<Card.Header color='primary'>This is a header</Card.Header>
				{/* <CardBody>This is a body</CardBody> */}
				<Card.Body title='Title' subtitle='Subtitle'>
					Some body
				</Card.Body>
				<Card.Footer>This is a footer</Card.Footer>
			</Card>
			<Dropdown
				dropdownList={[
					'Action',
					'Another action',
					'Something else here',
					{ divider: true },
					'Separated link',
					{ divider: true },
					'One more separated link',
				]}
			/>
			<TextInput />
			<LinearProgress />
			<Tabs
				tabs={[
					{
						tabName: 'Profile',
						tabIcon: Face,
						tabContent: (
							<p>
								I think that’s a responsibility that I have, to push
								possibilities, to show people, this is the level that things
								could be at. So when you get something that has the name Kanye
								West on it, it’s supposed to be pushing the furthest
								possibilities. I will be the leader of a company that ends up
								being worth billions of dollars, because I got the answers. I
								understand culture. I am the nucleus.
							</p>
						),
					},
					{
						tabName: 'Messages',
						tabIcon: Chat,
						tabContent: (
							<p>
								I think that’s a responsibility that I have, to push
								possibilities, to show people, this is the level that things
								could be at. I will be the leader of a company that ends up
								being worth billions of dollars, because I got the answers. I
								understand culture. I am the nucleus. I think that’s a
								responsibility that I have, to push possibilities, to show
								people, this is the level that things could be at.
							</p>
						),
					},
					{
						tabName: 'Settings',
						tabIcon: Build,
						tabContent: (
							<p>
								think that’s a responsibility that I have, to push
								possibilities, to show people, this is the level that things
								could be at. So when you get something that has the name Kanye
								West on it, it’s supposed to be pushing the furthest
								possibilities. I will be the leader of a company that ends up
								being worth billions of dollars, because I got the answers. I
								understand culture. I am the nucleus.
							</p>
						),
					},
				]}
			></Tabs>
			<Footer items={footerItems} />
		</React.Fragment>
	);
};

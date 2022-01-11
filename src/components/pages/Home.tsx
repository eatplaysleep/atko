/** @format */

import * as React from 'react';
import {
	Badge,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Dropdown,
} from '..';

export const Home = () => {
	return (
		<React.Fragment>
			<Button color='primary'>
				Notifications<Badge>4</Badge>
			</Button>

			<Card>
				<CardHeader color='primary'>This is a header</CardHeader>
				{/* <CardBody>This is a body</CardBody> */}
				<CardBody title='Title' subtitle='Subtitle'>
					Some body
				</CardBody>
				<CardFooter>This is a footer</CardFooter>
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
		</React.Fragment>
	);
};

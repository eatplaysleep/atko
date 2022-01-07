/** @format */

import * as React from 'react';
import { Badge, Button, Card, CardBody, CardFooter, CardHeader } from '..';

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
		</React.Fragment>
	);
};

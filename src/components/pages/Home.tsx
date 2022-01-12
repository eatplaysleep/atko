/** @format */

import * as React from 'react';
import { Badge, Button, Card, Dropdown, LinearProgress, TextInput } from '..';

export const Home = () => {
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
		</React.Fragment>
	);
};

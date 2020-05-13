import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';
import twitterLogo from '../twitter.svg';

const Footer = props => {
	return (
		<div>
			<Segment
				inverted
				style={{ margin: '5em 0em 0em', padding: '2em 0em' }}
				vertical
			>
				<Container textAlign='center'>
					<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
					<List horizontal inverted divided link>
						<List.Item as='a' href='#'>Site Map</List.Item>
						<List.Item as='a' href='#'>Contact Us</List.Item>
						<List.Item as='a' href='#'>Terms and Conditions</List.Item>
						<List.Item as='a' href='#'>Privacy Policy</List.Item>
					</List>
					<div className="twitter">
						<a href="https://twitter.com/baristure_" >
							<img
								src={twitterLogo}
								width={26}
								alt="baristure twitter" />
							<span>@baristure_</span>
						</a>
					</div>
				</Container>
			</Segment>
		</div>
	);
};

export default Footer;
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class BodySection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, title } = this.props;
		return (
			<>
				<div id='bodySection'>
					<h2>{title}</h2>
					{children}
				</div>
			</>
		);
	}
}

export default BodySection;

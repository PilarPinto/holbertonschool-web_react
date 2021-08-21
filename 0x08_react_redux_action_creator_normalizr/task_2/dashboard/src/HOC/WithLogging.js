import React from 'react';

const WithLogging = (WrappedComponent) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.displayName = `WithLogging(${WrappedComponent.name})`;
		}

		componentDidMount() {
			console.log(
				`Component ${WrappedComponent.name || 'Component'} is mounted`
			);
		}

		componentWillUnmount() {
			console.log(
				`Component ${
					WrappedComponent.name || 'Component'
				} is going to unmount`
			);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default WithLogging;

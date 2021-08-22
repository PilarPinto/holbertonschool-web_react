import React from 'react';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('App component', () => {
	it('mapStateToProps', () => {
		let state = fromJS({
			isUserLoggedIn: true,
			isNotificationDrawerVisible: true,
		});

		const result = mapStateToProps(state);

		const expectedResult = {
			isLoggedIn: true,
			displayDrawer: true,
		};

		expect(result).toEqual(expectedResult);
	});
});

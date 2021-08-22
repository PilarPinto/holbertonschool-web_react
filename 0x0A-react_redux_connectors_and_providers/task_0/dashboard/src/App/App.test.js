import React from 'react';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('App component', () => {
	it('mapStateToProps', () => {
		let state = fromJS({
			isUserLoggedIn: true,
		});

		const result = mapStateToProps(state);

		const expectedResult = {
			isLoggedIn: true,
		};

		expect(result).toEqual(expectedResult);
	});
});

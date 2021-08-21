import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import { expect } from 'chai';

describe('Utils functions', () => {
	it('getFullYear', () => {
		expect(getFullYear()).equal(new Date().getFullYear());
	});

	it('getFooterCopy false', () => {
		expect(getFooterCopy(false)).equal('Holberton School main dashboard');
	});

	it('getFooterCopy true', () => {
		expect(getFooterCopy(true)).equal('Holberton School');
	});

	it('getLatestNotification', () => {
		expect(getLatestNotification()).equal(
			'<strong>Urgent requirement</strong> - complete by EOD'
		);
	});
});

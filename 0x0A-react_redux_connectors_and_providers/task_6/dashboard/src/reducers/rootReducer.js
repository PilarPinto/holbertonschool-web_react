import {
	initialState as initialCourseState,
	courseReducer,
} from './courseReducer';
import {
	initialState as initialNotificationState,
	notificationReducer,
} from './notificationReducer';
import { initialState as initialUiState, uiReducer } from './uiReducer';

export const initialState = {
	courses: initialCourseState,
	notifications: initialNotificationState,
	ui: initialUiState,
};

export const rootReducer = {
	courses: courseReducer,
	notifications: notificationReducer,
	ui: uiReducer,
};

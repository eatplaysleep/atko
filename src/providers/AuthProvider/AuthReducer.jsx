/** @format */

import * as _ from 'lodash';

export const initialState = {
	isError: false,
	isLoading: false,
	isLoadingLogin: false,
	isAuthenticated: false,
	isLoadingProfile: false,
	isLoadingAuthenticators: false,
	authModalIsVisible: false,
	factorsModalIsVisible: false,
	errors: [],
};

export const actionTypes = {
	authenticators: {
		enroll: {
			cancel: 'AUTHENTICATORS_ENROLL_CANCEL',
			error: 'AUTHENTICATORS_ENROLL_ERROR',
			start: 'AUTHENTICATORS_ENROLL_START',
			success: 'AUTHENTICATORS_ENROLL_SUCCESS',
		},
		fetch: {
			error: 'AUTHENTICATORS_FETCH_ERROR',
			start: 'AUTHENTICATORS_FETCH_START',
			success: 'AUTHENTICATORS_FETCH_SUCCESS',
		},
	},
	login: {
		cancel: 'LOGIN_CANCEL',
		error: 'LOGIN_ERROR',
		start: {
			withCredentials: 'LOGIN_START_WITH_CREDENTIALS',
			withModal: 'LOGIN_START_WITH_MODAL',
			withRedirect: 'LOGIN_START_WITH_REDIRECT',
		},
		started: 'LOGIN_STARTED',
		success: 'LOGIN_SUCCESS',
		silentAuth: {
			start: 'SILENT_AUTH_START',
			success: 'SILENT_AUTH_SUCCESS',
			error: 'SILENT_AUTH_ERROR',
		},
	},
	logout: {
		start: 'LOGOUT_START',
		success: 'LOGOUT_SUCCESS',
		error: 'LOGOUT_ERROR',
	},
	user: {
		info: {
			fetch: {
				start: 'USER_INFO_FETCH_START',
				success: 'USER_INFO_FETCH_SUCCESS',
				error: 'USER_INFO_FETCH_ERROR',
			},
		},
	},
};

const initialLoginState = {
	isLoadingLogin: false,
	isVisibleAuthIframe: false,
	isVisibleAuthModal: false,
};

export const AuthReducer = (state, action) => {
	try {
		switch (action?.type) {
			case actionTypes.login.started:
				return _.merge({}, state, action?.payload, {
					isVisibleAuthIframe: true,
					isVisibleAuthModal: true,
					isLoadingLogin: false,
				});
			case actionTypes.login.silentAuth.start:
				return _.merge({}, state, action?.payload, {
					isLoadingLogin: true,
				});
			case actionTypes.login.start.withModal:
				return _.merge({}, state, action?.payload, {
					isVisibleAuthIframe: true,
					isVisibleAuthModal: true,
					isLoadingLogin: true,
				});
			case actionTypes.login.silentAuth.success:
			case actionTypes.login.cancel:
			case actionTypes.login.success:
				return _.merge({}, state, action?.payload, initialLoginState);
			case actionTypes.user.info.fetch.start:
				return _.merge({}, state, action?.payload, { isLoadingProfile: true });
			default:
				throw new Error(`Unhandled action type: ${action.type}`);
		}
	} catch (error) {
		throw new Error(`authReducer error: [${error}]`);
	}
};

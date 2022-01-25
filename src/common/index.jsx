/** @format */

import React, { Fragment, createContext, useEffect, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

// Okta SDKs
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';

import AuthProvider from 'providers/AuthProvider/AuthContext';
import AuthDispatchContext from 'providers/AuthProvider/AuthDispatcher';
import { actionTypes } from 'providers/AuthProvider/AuthReducer';
import { useAuthDispatch, useAuthState, useAuthActions } from 'hooks';

// const utils = {
// 	getUserInfo,
// };

const Okta = {
	Auth: OktaAuth,
	Security,
	toRelativeUrl,
};

const Auth = {
	Provider: AuthProvider,
	DispatchContext: AuthDispatchContext,
	useAuthDispatch,
	useAuthState,
	useAuthActions,
};

export {
	Auth,
	Fragment,
	Okta,
	PropTypes,
	React,
	actionTypes,
	createContext,
	useEffect,
	useReducer,
	useState,
};

export { default as config } from './config';

/** @format */
import { Auth, Okta, React, config, useEffect } from 'common';
import { Route, Navigate, Switch, useHistory, useLocation } from 'react-router-dom';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Kit 2 React themes
import theme from 'assets/theme';
// import Presentation from '@/layouts/pages/presentation';

// Material Kit 2 React routes
import { navbar as routes } from 'routes';

import { Home, Me, Navbar } from 'components';
import 'styles/App.css';

const oktaAuth = new Okta.Auth(config.authConfig.oidc);

oktaAuth.start();

const navbarRoutes = routes;

const App = () => {
	const { pathname } = useLocation();
	const history = useHistory();
	const restoreOriginalUri = async (_oktaAuth, originalUri) =>
		history.replace(Okta.toRelativeUrl(originalUri || '/', window.location.origin));
	const customAuthHandler = () => history.push('/');

	// Setting page scroll to 0 when changing the route
	useEffect(() => {
		document.documentElement.scrollTop = 0;

		if (document?.scrollingElement) {
			document.scrollingElement.scrollTop = 0;
		}
	}, [pathname]);

	const getRoutes = allRoutes =>
		allRoutes.map(route => {
			if (route.collapse) {
				return getRoutes(route.collapse);
			}

			if (route.route) {
				if (route.route.isSecure) {
					return <Okta.SecureRoute path={route.route} element={route.component} key={route.key} />;
				}

				return <Route path={route.route} element={route.component} key={route.key} />;
			}

			return null;
		});
	// TODO make navbar hide-able via AppState provider
	// TODO add SnackbarProvider from notistack
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<React.Suspense fallback={<div>Loading...</div>}>
				<Okta.Security
					oktaAuth={oktaAuth}
					restoreOriginalUri={restoreOriginalUri}
					onAuthRequired={customAuthHandler}
				>
					<Auth.Provider>
						<Navbar
							routes={navbarRoutes}
							action={{
								type: 'external',
								route: 'https://www.creative-tim.com/product/material-kit-react',
								label: 'free download',
								color: 'info',
							}}
							sticky
						/>
						<Switch>
							{getRoutes(routes)}
							<Route path='/' element={<Home />} />
							{/* <Route path='/signin' element={<SignInBasic />} /> */}
							<Route path='/me' element={<Me />} />
							<Route path='*' element={<Navigate to='/' />} />
						</Switch>
					</Auth.Provider>
				</Okta.Security>
			</React.Suspense>
		</ThemeProvider>
	);
};

export default App;

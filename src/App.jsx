/** @format */
import { useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

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

const navbarRoutes = routes;

const App = () => {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;

    if (document?.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
    }
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  // TODO make navbar hide-able via AppState provider
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
      <Routes>
        {getRoutes(routes)}
        <Route path='/' element={<Home />} />
        {/* <Route path='/signin' element={<SignInBasic />} /> */}
        <Route path='/me' element={<Me />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;

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
import { footer as footerRoutes, navbar as navbarRoutes } from 'routes';

import { Footer, Home, Me, MKBox, Navbar, SignInBasic } from 'components';
import 'styles/App.css';

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
        {getRoutes(navbarRoutes)}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInBasic />} />
        <Route path="/me" element={<Me />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </ThemeProvider>
  );
};

export default App;
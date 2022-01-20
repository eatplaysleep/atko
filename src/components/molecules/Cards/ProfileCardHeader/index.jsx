/**
 * =========================================================
 * Material Dashboard 2 React - v2.0.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 *
 * Coded by www.creative-tim.com
 *
 *  =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

import { useState, useEffect } from 'react';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import { AppBar, Grid, Icon, Tab, Tabs } from '@mui/material';

// Material Dashboard 2 React components
import MK from 'components/material-ui-kit';

// Material Dashboard 2 PRO React base styles
import breakpoints from 'assets/theme/base/breakpoints';

// Images
import burceMars from 'assets/images/bruce-mars.jpg';

const ProfileCardHeader = ({ children }) => {
  const [tabsOrientation, setTabsOrientation] = useState('horizontal');
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    const handleTabsOrientation = () =>
      window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation('vertical')
        : setTabsOrientation('horizontal');

    /**
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener('resize', handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MK.Box position='relative' mb={5}>
      <Grid container spacing={3} alignItems='center'>
        <Grid item>
          <MK.Avatar src={burceMars} alt='profile-image' size='xl' shadow='sm' />
        </Grid>
        <Grid item>
          <MK.Box height='100%' mt={0.5} lineHeight={1}>
            <MK.Typography variant='h5' fontWeight='medium'>
              Richard Davis
            </MK.Typography>
            <MK.Typography variant='button' color='text' fontWeight='regular'>
              CEO / Co-Founder
            </MK.Typography>
          </MK.Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ ml: 'auto' }}>
          <AppBar position='static'>
            <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
              <Tab
                label='App'
                icon={
                  <Icon fontSize='small' sx={{ mt: -0.25 }}>
                    home
                  </Icon>
                }
              />
              <Tab
                label='Message'
                icon={
                  <Icon fontSize='small' sx={{ mt: -0.25 }}>
                    email
                  </Icon>
                }
              />
              <Tab
                label='Settings'
                icon={
                  <Icon fontSize='small' sx={{ mt: -0.25 }}>
                    settings
                  </Icon>
                }
              />
            </Tabs>
          </AppBar>
        </Grid>
      </Grid>
      {children}
    </MK.Box>
  );
};

// Setting default props for the Header
ProfileCardHeader.defaultProps = {
  children: '',
};

// Typechecking props for the Header
ProfileCardHeader.propTypes = {
  children: PropTypes.node,
};

export default ProfileCardHeader;

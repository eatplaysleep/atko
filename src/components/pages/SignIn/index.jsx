/**
 * =========================================================
 * Material Kit 2 React - v2.0.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/material-kit-react
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

import { useState } from 'react';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import { Card, Grid, Link as MuiLink, Switch } from '@mui/material';

// @mui icons
import { Facebook, GitHub, Google } from '@mui/icons-material';

// eslint-disable-next-line import/no-cycle
import { PageLayout, SimpleFooter } from 'components';
import MK from 'components/material-ui-kit';

// Images
import bgImage from 'assets/images/bg-sign-in-basic.jpeg';

export const SignInBasic = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <PageLayout
      position='absolute'
      top={0}
      left={0}
      zIndex={1}
      width='100%'
      minHeight='100vh'
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      footer={<SimpleFooter light />}
      navbar={false}
    >
      <MK.Box px={1} width='100%' height='100vh' mx='auto' position='relative' zIndex={2}>
        <Grid container spacing={1} justifyContent='center' alignItems='center' height='100%'>
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MK.Box
                variant='gradient'
                bgColor='info'
                borderRadius='lg'
                coloredShadow='info'
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign='center'
              >
                <MK.Typography variant='h4' fontWeight='medium' color='white' mt={1}>
                  Sign in
                </MK.Typography>
                <Grid container spacing={3} justifyContent='center' sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MK.Typography component={MuiLink} href='#' variant='body1' color='white'>
                      <Facebook color='inherit' />
                    </MK.Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <MK.Typography component={MuiLink} href='#' variant='body1' color='white'>
                      <GitHub color='inherit' />
                    </MK.Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <MK.Typography component={MuiLink} href='#' variant='body1' color='white'>
                      <Google color='inherit' />
                    </MK.Typography>
                  </Grid>
                </Grid>
              </MK.Box>
              <MK.Box pt={4} pb={3} px={3}>
                <MK.Box component='form' role='form'>
                  <MK.Box mb={2}>
                    <MK.Input type='email' label='Email' fullWidth />
                  </MK.Box>
                  <MK.Box mb={2}>
                    <MK.Input type='password' label='Password' fullWidth />
                  </MK.Box>
                  <MK.Box display='flex' alignItems='center' ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MK.Typography
                      variant='button'
                      fontWeight='regular'
                      color='text'
                      onClick={handleSetRememberMe}
                      sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MK.Typography>
                  </MK.Box>
                  <MK.Box mt={4} mb={1}>
                    <MK.Button variant='gradient' color='info' fullWidth>
                      sign in
                    </MK.Button>
                  </MK.Box>
                  <MK.Box mt={3} mb={1} textAlign='center'>
                    <MK.Typography variant='button' color='text'>
                      Don&apos;t have an account?{' '}
                      <MK.Typography
                        component={Link}
                        to='/authentication/sign-up/cover'
                        variant='button'
                        color='info'
                        fontWeight='medium'
                        textGradient
                      >
                        Sign up
                      </MK.Typography>
                    </MK.Typography>
                  </MK.Box>
                </MK.Box>
              </MK.Box>
            </Card>
          </Grid>
        </Grid>
      </MK.Box>
    </PageLayout>
  );
};

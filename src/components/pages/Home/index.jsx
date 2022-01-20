/**
 * /*
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

// @mui material components
import { Card, Container, Grid } from '@mui/material';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';
import { PageLayout } from 'components';

// Material Kit 2 React examples
// import FilledInfoCard from 'examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections
// import Counters from 'pages/Presentation/sections/Counters';
// import Information from 'pages/Presentation/sections/Information';
// import DesignBlocks from 'pages/Presentation/sections/DesignBlocks';
// import Pages from 'pages/Presentation/sections/Pages';
// import Testimonials from 'pages/Presentation/sections/Testimonials';
// import Download from 'pages/Presentation/sections/Download';

// Presentation page components
// import BuiltByDevelopers from 'pages/Presentation/components/BuiltByDevelopers';

// Images
import bgImage from 'assets/images/bg-presentation.jpg';

export const Home = () => (
  <>
    {/* <PageLayout.Header
      minHeight='75vh'
      width='100%'
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        display: 'grid',
        placeItems: 'center',
      }}
    > */}
    <MK.Box
      minHeight='75vh'
      width='100%'
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container>
        <Grid container item xs={12} lg={7} justifyContent='center' mx='auto'>
          <MK.Typography
            variant='h1'
            color='white'
            mt={-6}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down('md')]: {
                fontSize: size['3xl'],
              },
            })}
          >
            Material Kit 2 React{' '}
          </MK.Typography>
          <MK.Typography
            variant='body1'
            color='white'
            textAlign='center'
            px={{ xs: 6, lg: 12 }}
            mt={1}
          >
            Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
            developers around the world.
          </MK.Typography>
        </Grid>
      </Container>
    </MK.Box>
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
        backdropFilter: 'saturate(200%) blur(30px)',
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
      }}
    >
      {/* <Counters />
        <Information />
        <DesignBlocks />
        <Pages /> */}
      <Container sx={{ mt: 6 }}>{/* <BuiltByDevelopers /> */}</Container>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            {/* <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/material-kit/',
                  label: "Let's start",
                }}
              /> */}
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/overview/datepicker/',
                  label: 'Read more',
                }}
              /> */}
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: 'external',
                  route: 'https://www.creative-tim.com/learning-lab/react/alerts/material-kit/',
                  label: 'Read more',
                }}
              /> */}
          </Grid>
        </Grid>
      </Container>
      {/* <Testimonials />
        <Download /> */}
      <MK.Box pt={18} pb={6}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5} ml='auto' sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
              <MK.Typography variant='h4' fontWeight='bold' mb={0.5}>
                Thank you for your support!
              </MK.Typography>
              <MK.Typography variant='body1' color='text'>
                We deliver the best web products
              </MK.Typography>
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              my={{ xs: 5, lg: 'auto' }}
              mr={{ xs: 0, lg: 'auto' }}
              sx={{ textAlign: { xs: 'center', lg: 'right' } }}
            >
              <MK.SocialButton
                component='a'
                href='https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react'
                target='_blank'
                color='twitter'
                sx={{ mr: 1 }}
              >
                <i className='fab fa-twitter' />
                &nbsp;Tweet
              </MK.SocialButton>
              <MK.SocialButton
                component='a'
                href='https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react'
                target='_blank'
                color='facebook'
                sx={{ mr: 1 }}
              >
                <i className='fab fa-facebook' />
                &nbsp;Share
              </MK.SocialButton>
              <MK.SocialButton
                component='a'
                href='https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react'
                target='_blank'
                color='pinterest'
              >
                <i className='fab fa-pinterest' />
                &nbsp;Pin it
              </MK.SocialButton>
            </Grid>
          </Grid>
        </Container>
      </MK.Box>
    </Card>
  </>
);
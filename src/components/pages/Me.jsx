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

import { Container } from '@mui/material';

// Material Kit 2 React components
import { MKBox, ProfileCard } from 'components';

// Images
import bgImage from 'assets/images/city-profile.jpg';

export const Me = () => (
  <MKBox bgColor="white">
    <MKBox
      minHeight="50vmin"
      width="100%"
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        display: 'grid',
        placeItems: 'center',
      }}
    />
    <Container>
      <ProfileCard />
    </Container>
  </MKBox>
);

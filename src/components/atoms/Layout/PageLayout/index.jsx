/** @format */

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

// Material Kit 2 React components
import { MKBox } from 'components';

// TODO implement unsplash API
// Images
import bgImage from 'assets/images/city-profile.jpg';

export const PageLayoutRoot = ({ children, bgColor, ...props }) => (
  <MKBox bgColor={bgColor ?? 'white'}>
    <MKBox
      minHeight='50vmin'
      width='100%'
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
    <Container>{children}</Container>
  </MKBox>
);

PageLayoutRoot.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
};

export const PageLayout = PageLayoutRoot;

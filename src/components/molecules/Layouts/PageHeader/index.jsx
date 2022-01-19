/** @format */

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

// Material Kit 2 React components
import { MKBox } from 'components';

// TODO implement unsplash API
// Images
import bgImage from 'assets/images/city-profile.jpg';

const PageHeaderRoot = ({ bgColor, children, container, ...props }) => (
  <MKBox bgColor={bgColor}>
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
      {...props}
    />
    {container && <Container>{children}</Container>}
    {!container && { children }}
  </MKBox>
);

PageHeaderRoot.defaultProps = {
  bgColor: 'white',
  container: true,
};

PageHeaderRoot.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  container: PropTypes.bool,
};

export const PageHeader = PageHeaderRoot;

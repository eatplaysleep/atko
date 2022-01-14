/** @format */

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

// Material Kit 2 React components
import { MKBox, Footer } from 'components';

// Material Kit 2 React routes
import { footer as footerRoutes, navbar as navbarRoutes } from 'routes';

// TODO implement unsplash API
// Images
import bgImage from 'assets/images/city-profile.jpg';

export const PageLayoutRoot = ({ bgColor, children, container, footer, ...props }) => {
  const hasFooter = typeof footer === 'boolean' ? footer : true;

  let pageFooter = <Footer content={footerRoutes} />;

  if (typeof footer !== 'boolean' && footer) {
    pageFooter = footer;
  }

  return (
    <>
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
          {...props}
        />
        {container && <Container>{children}</Container>}
        {!container && { children }}
      </MKBox>
      {hasFooter && pageFooter}
    </>
  );
};

PageLayoutRoot.defaultProps = {
  container: true,
};

PageLayoutRoot.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  container: PropTypes.bool,
  footer: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

export const PageLayout = PageLayoutRoot;

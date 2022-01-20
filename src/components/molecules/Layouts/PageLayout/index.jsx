/** @format */

import React from 'react';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

// Material Kit 2 React routes
import { footer as footerRoutes } from 'routes';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';
import PageHeader from 'components/molecules/Layouts/PageHeader';
import PageFooter from 'components/molecules/Layouts/PageFooter';

const PageLayout = ({ children, container, footer, header }) => {
  let pageHeader = <PageHeader />;
  let pageFooter = <PageFooter content={footerRoutes} />;
  let showHeader = header;
  let showFooter = footer;

  const c = [];

  React.Children.forEach(children, (child) => {
    switch (child?.type?.name) {
      case 'PageHeaderRoot':
        pageHeader = child;
        showHeader = true;
        break;
      case 'PageFooterRoot':
        pageFooter = child;
        showFooter = true;
        break;
      default:
        c.push(child);
    }
  });

  return (
    <>
      {showHeader && pageHeader}
      {!showHeader && <MK.Box minHeight='40vmin' />}
      {container && <Container>{c}</Container>}
      {!container && { c }}
      {showFooter && pageFooter}
    </>
  );
};

PageLayout.Header = PageHeader;
PageLayout.Footer = PageFooter;

PageLayout.defaultProps = {
  container: true,
  footer: true,
  header: false,
};

PageLayout.propTypes = {
  children: PropTypes.node,
  container: PropTypes.bool,
  footer: PropTypes.bool,
  header: PropTypes.bool,
};

export default PageLayout;

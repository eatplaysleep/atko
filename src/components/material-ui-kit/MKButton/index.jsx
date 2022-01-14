/**
 * =========================================================
 * Material Kit 2 React React - v1.0.0
 * =========================================================
 *
 * Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 *
 * Coded by www.creative-tim.com
 *
 * =========================================================
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * @format
 */

import { forwardRef } from 'react';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// Custom styles for MKButton
import MKButtonRoot from 'components/material-ui-kit/MKButton/MKButtonRoot';

const MKButtonComponent = forwardRef(
  ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => (
    <MKButtonRoot
      {...rest}
      ref={ref}
      color="primary"
      variant={variant === 'gradient' ? 'contained' : variant}
      size={size}
      ownerState={{ color, variant, size, circular, iconOnly }}
    >
      {children}
    </MKButtonRoot>
  )
);

// Setting default values for the props of MKButton
MKButtonComponent.defaultProps = {
  size: 'medium',
  variant: 'contained',
  color: 'white',
  circular: false,
  iconOnly: false,
};

// Typechecking props for the MKButton
MKButtonComponent.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined', 'gradient']),
  color: PropTypes.oneOf([
    'default',
    'white',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  circular: PropTypes.bool,
  iconOnly: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export const MKButton = MKButtonComponent;
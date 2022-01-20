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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// react-flatpickr components
import Flatpickr from 'react-flatpickr';

// react-flatpickr styles
import 'flatpickr/dist/flatpickr.css';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

const MKDatePicker = ({ input, ...rest }) => {
  return (
    <Flatpickr
      {...rest}
      render={({ defaultValue }, ref) => (
        <MK.Input {...input} defaultValue={defaultValue} inputRef={ref} />
      )}
    />
  );
};

// Setting default values for the props of MKDatePicker
MKDatePicker.defaultProps = {
  input: {},
};

// Typechecking props for the MKDatePicker
MKDatePicker.propTypes = {
  input: PropTypes.objectOf(PropTypes.any),
};

export default MKDatePicker;

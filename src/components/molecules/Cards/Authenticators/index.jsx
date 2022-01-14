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

// prop-types is library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import { Card, Divider } from '@mui/material';

// Material Dashboard 2 React components
import { MKBox, MKTypography } from 'components';

function AuthenticatorsCardRoot({ title, description, data, shadow }) {
  const labels = [];
  const values = [];

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(data).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(data).forEach((el) => values.push(el));

  // Render the card info items
  const renderData = labels.map((label, key) => (
    <MKBox key={label} display='flex' py={1} pr={2}>
      <MKTypography variant='button' fontWeight='bold' textTransform='capitalize'>
        {label}: &nbsp;
      </MKTypography>
      <MKTypography variant='button' fontWeight='regular' color='text'>
        &nbsp;{values[key]}
      </MKTypography>
    </MKBox>
  ));

  return (
    <Card sx={{ height: '100%', boxShadow: !shadow && 'none' }}>
      <MKBox display='flex' justifyContent='space-between' alignItems='center' pt={2} px={2}>
        <MKTypography variant='h6' fontWeight='medium' textTransform='capitalize'>
          {title}
        </MKTypography>
      </MKBox>
      <MKBox p={2}>
        {description && (
          <MKBox mb={2} lineHeight={1}>
            <MKTypography variant='button' color='text' fontWeight='light'>
              {description}
            </MKTypography>
          </MKBox>
        )}
        <MKBox opacity={0.3}>
          <Divider />
        </MKBox>
        <MKBox>{renderData}</MKBox>
      </MKBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
AuthenticatorsCardRoot.defaultProps = {
  data: {},
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
AuthenticatorsCardRoot.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.string),
  shadow: PropTypes.bool,
};

export const AuthenticatorsCard = AuthenticatorsCardRoot;

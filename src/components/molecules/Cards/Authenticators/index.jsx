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
// import { MK.Box, MK.Typography } from 'components';
import MK from 'components/material-ui-kit';

const AuthenticatorsCard = ({ title, description, data, shadow }) => {
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
    <MK.Box key={label} display='flex' py={1} pr={2}>
      <MK.Typography variant='button' fontWeight='bold' textTransform='capitalize'>
        {label}: &nbsp;
      </MK.Typography>
      <MK.Typography variant='button' fontWeight='regular' color='text'>
        &nbsp;{values[key]}
      </MK.Typography>
    </MK.Box>
  ));

  return (
    <Card sx={{ height: '100%', boxShadow: !shadow && 'none' }}>
      <MK.Box display='flex' justifyContent='space-between' alignItems='center' pt={2} px={2}>
        <MK.Typography variant='h6' fontWeight='medium' textTransform='capitalize'>
          {title}
        </MK.Typography>
      </MK.Box>
      <MK.Box p={2}>
        {description && (
          <MK.Box mb={2} lineHeight={1}>
            <MK.Typography variant='button' color='text' fontWeight='light'>
              {description}
            </MK.Typography>
          </MK.Box>
        )}
        <MK.Box opacity={0.3}>
          <Divider />
        </MK.Box>
        <MK.Box>{renderData}</MK.Box>
      </MK.Box>
    </Card>
  );
};

// Setting default props for the ProfileInfoCard
AuthenticatorsCard.defaultProps = {
  data: {},
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
AuthenticatorsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.string),
  shadow: PropTypes.bool,
};

export default AuthenticatorsCard;

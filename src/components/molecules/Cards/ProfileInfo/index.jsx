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

// react-routers components
import { Link } from 'react-router-dom';

// prop-types is library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import { Card, Divider, Icon, Tooltip } from '@mui/material';

// Material Dashboard 2 React components
import { MKBox, MKTypography } from 'components';

// Material Dashboard 2 PRO React base styles
import colors from 'assets/theme/base/colors';
import typography from 'assets/theme/base/typography';

function ProfileInfoCardRoot({ title, description, info, social, action, shadow }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MKBox key={label} display='flex' py={1} pr={2}>
      <MKTypography variant='button' fontWeight='bold' textTransform='capitalize'>
        {label}: &nbsp;
      </MKTypography>
      <MKTypography variant='button' fontWeight='regular' color='text'>
        &nbsp;{values[key]}
      </MKTypography>
    </MKBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <MKBox
      key={color}
      component='a'
      href={link}
      target='_blank'
      rel='noreferrer'
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </MKBox>
  ));

  return (
    <Card sx={{ pr: 1, height: '100%', boxShadow: !shadow && 'none' }}>
      <MKBox display='flex' justifyContent='space-between' alignItems='center' pt={2} px={2}>
        <MKTypography variant='h6' fontWeight='medium' textTransform='capitalize'>
          {title}
        </MKTypography>
        <MKTypography component={Link} to={action.route} variant='body2' color='secondary'>
          <Tooltip title={action.tooltip} placement='top'>
            <Icon>edit</Icon>
          </Tooltip>
        </MKTypography>
      </MKBox>
      <MKBox p={2}>
        <MKBox mb={2} lineHeight={1}>
          <MKTypography variant='button' color='text' fontWeight='light'>
            {description}
          </MKTypography>
        </MKBox>
        <MKBox opacity={0.3}>
          <Divider />
        </MKBox>
        <MKBox>
          {renderItems}
          <MKBox display='flex' py={1} pr={2}>
            <MKTypography variant='button' fontWeight='bold' textTransform='capitalize'>
              social: &nbsp;
            </MKTypography>
            {renderSocial}
          </MKBox>
        </MKBox>
      </MKBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCardRoot.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCardRoot.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export const ProfileInfoCard = ProfileInfoCardRoot;

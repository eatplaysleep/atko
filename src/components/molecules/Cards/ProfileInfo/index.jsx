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
import MK from 'components/material-ui-kit';

// Material Dashboard 2 PRO React base styles
import colors from 'assets/theme/base/colors';
import typography from 'assets/theme/base/typography';

const ProfileInfoCard = ({ title, description, info, social, action, shadow }) => {
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
    <MK.Box key={label} display='flex' py={1} pr={2}>
      <MK.Typography variant='button' fontWeight='bold' textTransform='capitalize'>
        {label}: &nbsp;
      </MK.Typography>
      <MK.Typography variant='button' fontWeight='regular' color='text'>
        &nbsp;{values[key]}
      </MK.Typography>
    </MK.Box>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <MK.Box
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
    </MK.Box>
  ));

  return (
    <Card sx={{ pr: 1, height: '100%', boxShadow: !shadow && 'none' }}>
      <MK.Box display='flex' justifyContent='space-between' alignItems='center' pt={2} px={2}>
        <MK.Typography variant='h6' fontWeight='medium' textTransform='capitalize'>
          {title}
        </MK.Typography>
        <MK.Typography component={Link} to={action.route} variant='body2' color='secondary'>
          <Tooltip title={action.tooltip} placement='top'>
            <Icon>edit</Icon>
          </Tooltip>
        </MK.Typography>
      </MK.Box>
      <MK.Box p={2}>
        <MK.Box mb={2} lineHeight={1}>
          <MK.Typography variant='button' color='text' fontWeight='light'>
            {description}
          </MK.Typography>
        </MK.Box>
        <MK.Box opacity={0.3}>
          <Divider />
        </MK.Box>
        <MK.Box>
          {renderItems}
          <MK.Box display='flex' py={1} pr={2}>
            <MK.Typography variant='button' fontWeight='bold' textTransform='capitalize'>
              social: &nbsp;
            </MK.Typography>
            {renderSocial}
          </MK.Box>
        </MK.Box>
      </MK.Box>
    </Card>
  );
};

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
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

export default ProfileInfoCard;

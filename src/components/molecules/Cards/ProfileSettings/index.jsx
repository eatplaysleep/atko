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

import { useState } from 'react';

// @mui material components
import { Card, Switch } from '@mui/material';

// Material Dashboard 2 React components
import { MKBox, MKTypography } from 'components';

export const ProfileSettingsCard = () => {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <MKBox p={2}>
        <MKTypography variant='h6' fontWeight='medium' textTransform='capitalize'>
          platform settings
        </MKTypography>
      </MKBox>
      <MKBox pt={1} pb={2} px={2} lineHeight={1.25}>
        <MKTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
          account
        </MKTypography>
        <MKBox display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MKBox mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </MKBox>
          <MKBox width='80%' ml={0.5}>
            <MKTypography variant='button' fontWeight='regular' color='text'>
              Email me when someone follows me
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MKBox mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </MKBox>
          <MKBox width='80%' ml={0.5}>
            <MKTypography variant='button' fontWeight='regular' color='text'>
              Email me when someone answers on my post
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MKBox mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </MKBox>
          <MKBox width='80%' ml={0.5}>
            <MKTypography variant='button' fontWeight='regular' color='text'>
              Email me when someone mentions me
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox mt={3}>
          <MKTypography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
            application
          </MKTypography>
        </MKBox>
        <MKBox display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MKBox mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </MKBox>
          <MKBox width='80%' ml={0.5}>
            <MKTypography variant='button' fontWeight='regular' color='text'>
              New launches and projects
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MKBox mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </MKBox>
          <MKBox width='80%' ml={0.5}>
            <MKTypography variant='button' fontWeight='regular' color='text'>
              Monthly product updates
            </MKTypography>
          </MKBox>
        </MKBox>
        <MKBox display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MKBox mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </MKBox>
          <MKBox width='80%' ml={0.5}>
            <MKTypography variant='button' fontWeight='regular' color='text'>
              Subscribe to newsletter
            </MKTypography>
          </MKBox>
        </MKBox>
      </MKBox>
    </Card>
  );
};

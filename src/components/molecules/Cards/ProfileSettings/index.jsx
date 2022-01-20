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
import MK from 'components/material-ui-kit';

const ProfileSettingsCard = () => {
  const [followsMe, setFollowsMe] = useState(true);
  const [answersPost, setAnswersPost] = useState(false);
  const [mentionsMe, setMentionsMe] = useState(true);
  const [newLaunches, setNewLaunches] = useState(false);
  const [productUpdate, setProductUpdate] = useState(true);
  const [newsletter, setNewsletter] = useState(false);

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <MK.Box p={2}>
        <MK.Typography variant='h6' fontWeight='medium' textTransform='capitalize'>
          platform settings
        </MK.Typography>
      </MK.Box>
      <MK.Box pt={1} pb={2} px={2} lineHeight={1.25}>
        <MK.Typography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
          account
        </MK.Typography>
        <MK.Box display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MK.Box mt={0.5}>
            <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
          </MK.Box>
          <MK.Box width='80%' ml={0.5}>
            <MK.Typography variant='button' fontWeight='regular' color='text'>
              Email me when someone follows me
            </MK.Typography>
          </MK.Box>
        </MK.Box>
        <MK.Box display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MK.Box mt={0.5}>
            <Switch checked={answersPost} onChange={() => setAnswersPost(!answersPost)} />
          </MK.Box>
          <MK.Box width='80%' ml={0.5}>
            <MK.Typography variant='button' fontWeight='regular' color='text'>
              Email me when someone answers on my post
            </MK.Typography>
          </MK.Box>
        </MK.Box>
        <MK.Box display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MK.Box mt={0.5}>
            <Switch checked={mentionsMe} onChange={() => setMentionsMe(!mentionsMe)} />
          </MK.Box>
          <MK.Box width='80%' ml={0.5}>
            <MK.Typography variant='button' fontWeight='regular' color='text'>
              Email me when someone mentions me
            </MK.Typography>
          </MK.Box>
        </MK.Box>
        <MK.Box mt={3}>
          <MK.Typography variant='caption' fontWeight='bold' color='text' textTransform='uppercase'>
            application
          </MK.Typography>
        </MK.Box>
        <MK.Box display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MK.Box mt={0.5}>
            <Switch checked={newLaunches} onChange={() => setNewLaunches(!newLaunches)} />
          </MK.Box>
          <MK.Box width='80%' ml={0.5}>
            <MK.Typography variant='button' fontWeight='regular' color='text'>
              New launches and projects
            </MK.Typography>
          </MK.Box>
        </MK.Box>
        <MK.Box display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MK.Box mt={0.5}>
            <Switch checked={productUpdate} onChange={() => setProductUpdate(!productUpdate)} />
          </MK.Box>
          <MK.Box width='80%' ml={0.5}>
            <MK.Typography variant='button' fontWeight='regular' color='text'>
              Monthly product updates
            </MK.Typography>
          </MK.Box>
        </MK.Box>
        <MK.Box display='flex' alignItems='center' mb={0.5} ml={-1.5}>
          <MK.Box mt={0.5}>
            <Switch checked={newsletter} onChange={() => setNewsletter(!newsletter)} />
          </MK.Box>
          <MK.Box width='80%' ml={0.5}>
            <MK.Typography variant='button' fontWeight='regular' color='text'>
              Subscribe to newsletter
            </MK.Typography>
          </MK.Box>
        </MK.Box>
      </MK.Box>
    </Card>
  );
};

export default ProfileSettingsCard;

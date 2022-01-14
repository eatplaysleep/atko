/** @format */

import { Card, Divider, Grid } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

import {
  MKBox,
  AuthenticatorsCard,
  ProfileCardHeader,
  ProfileInfoCard,
  ProfileSettingsCard,
} from 'components';

const ProfileCardRoot = () => (
  <Card
    sx={{
      position: 'relative',
      mt: -8,
      mx: 3,
      py: 2,
      px: 2,
    }}
  >
    <ProfileCardHeader>
      <MKBox mt={5} mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} xl={4}>
            <ProfileInfoCard
              title="profile information"
              description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              info={{
                fullName: 'Alec M. Thompson',
                mobile: '(44) 123 1234 123',
                email: 'alecthompson@mail.com',
                location: 'USA',
              }}
              social={[
                {
                  link: 'https://www.facebook.com/CreativeTim/',
                  icon: <Facebook />,
                  color: 'facebook',
                },
                {
                  link: 'https://twitter.com/creativetim',
                  icon: <Twitter />,
                  color: 'twitter',
                },
                {
                  link: 'https://www.instagram.com/creativetimofficial/',
                  icon: <Instagram />,
                  color: 'instagram',
                },
              ]}
              action={{ route: '', tooltip: 'Edit Profile' }}
              shadow={false}
            />
          </Grid>
          <Grid item xs={12} md={2} xl={4} sx={{ display: 'flex' }}>
            <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
            <ProfileSettingsCard />
            <Divider orientation="vertical" />
          </Grid>
          <Grid item xs={12} md={5} xl={4} sx={{ pr: 2, display: 'flex' }}>
            <AuthenticatorsCard title="authenticators" shadow={false} />
          </Grid>
        </Grid>
      </MKBox>
    </ProfileCardHeader>
  </Card>
);

export const ProfileCard = ProfileCardRoot;

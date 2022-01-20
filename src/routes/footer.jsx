/** @format */

// @mui icons
import { Facebook, GitHub, Twitter, YouTube } from '@mui/icons-material';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

// Images
import logoCT from 'assets/images/logo-ct-dark.png';

const date = new Date().getFullYear();

export const footer = {
  brand: {
    name: 'Material Kit 2',
    image: logoCT,
    route: '/',
  },
  socials: [
    {
      icon: <Facebook />,
      link: 'https://www.facebook.com/CreativeTim/',
    },
    {
      icon: <Twitter />,
      link: 'https://twitter.com/creativetim',
    },
    {
      icon: <GitHub />,
      link: 'https://github.com/creativetimofficial',
    },
    {
      icon: <YouTube />,
      link: 'https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w',
    },
  ],
  menus: [
    {
      name: 'company',
      items: [
        { name: 'about us', href: 'https://www.creative-tim.com/presentation' },
        { name: 'freebies', href: 'https://www.creative-tim.com/templates/free' },
        { name: 'premium tools', href: 'https://www.creative-tim.com/templates/premium' },
        { name: 'blog', href: 'https://www.creative-tim.com/blog' },
      ],
    },
    {
      name: 'resources',
      items: [
        { name: 'illustrations', href: 'https://iradesign.io/' },
        { name: 'bits & snippets', href: 'https://www.creative-tim.com/bits' },
        { name: 'affiliate program', href: 'https://www.creative-tim.com/affiliates/new' },
      ],
    },
    {
      name: 'help & support',
      items: [
        { name: 'contact us', href: 'https://www.creative-tim.com/contact-us' },
        { name: 'knowledge center', href: 'https://www.creative-tim.com/knowledge-center' },
        { name: 'custom development', href: 'https://services.creative-tim.com/' },
        { name: 'sponsorships', href: 'https://www.creative-tim.com/sponsorships' },
      ],
    },
    {
      name: 'legal',
      items: [
        { name: 'terms & conditions', href: 'https://www.creative-tim.com/terms' },
        { name: 'privacy policy', href: 'https://www.creative-tim.com/privacy' },
        { name: 'licenses (EULA)', href: 'https://www.creative-tim.com/license' },
      ],
    },
  ],
  copyright: (
    <MK.Typography variant='button' fontWeight='regular'>
      All rights reserved. Copyright &copy; {date} Material Kit by{' '}
      <MK.Typography
        component='a'
        href='https://www.creative-tim.com'
        target='_blank'
        rel='noreferrer'
        variant='button'
        fontWeight='regular'
      >
        Creative Tim
      </MK.Typography>
      .
    </MK.Typography>
  ),
};

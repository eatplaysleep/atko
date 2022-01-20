/**
 * /*
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

// react-router-dom components
import { Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import { Container, Grid } from '@mui/material';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

const PageFooter = ({ content, ...props }) => {
  const { brand, socials, menus, copyright } = content || {};
  return (
    <MK.Box pt={6} px={1} mt={6} {...props}>
      <MK.Box component='footer'>
        <Container>
          {content && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={3} sx={{ ml: 'auto', mb: 3 }}>
                <MK.Box>
                  <Link to={brand?.route}>
                    <MK.Box
                      component='img'
                      src={brand?.image}
                      alt={brand?.name}
                      maxWidth='2rem'
                      mb={2}
                    />
                  </Link>
                  <MK.Typography variant='h6'>{brand?.name}</MK.Typography>
                </MK.Box>
                <MK.Box display='flex' alignItems='center' mt={3}>
                  {socials &&
                    socials.map(({ icon, link }, key) => (
                      <MK.Typography
                        key={link}
                        component='a'
                        href={link}
                        target='_blank'
                        rel='noreferrer'
                        variant='h5'
                        color='dark'
                        opacity={0.8}
                        mr={key === socials.length - 1 ? 0 : 2.5}
                      >
                        {icon}
                      </MK.Typography>
                    ))}
                </MK.Box>
              </Grid>
              {menus &&
                menus.map(({ name: title, items }) => (
                  <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
                    <MK.Typography
                      display='block'
                      variant='button'
                      fontWeight='bold'
                      textTransform='capitalize'
                      mb={1}
                    >
                      {title}
                    </MK.Typography>
                    <MK.Box component='ul' p={0} m={0} sx={{ listStyle: 'none' }}>
                      {items.map(({ name, route, href }) => (
                        <MK.Box key={name} component='li' p={0} m={0} lineHeight={1.25}>
                          {href ? (
                            <MK.Typography
                              component='a'
                              href={href}
                              target='_blank'
                              rel='noreferrer'
                              variant='button'
                              fontWeight='regular'
                              textTransform='capitalize'
                            >
                              {name}
                            </MK.Typography>
                          ) : (
                            <MK.Typography
                              component={Link}
                              to={route}
                              variant='button'
                              fontWeight='regular'
                              textTransform='capitalize'
                            >
                              {name}
                            </MK.Typography>
                          )}
                        </MK.Box>
                      ))}
                    </MK.Box>
                  </Grid>
                ))}
              <Grid item xs={12} sx={{ textAlign: 'center', my: 3 }}>
                {copyright}
              </Grid>
            </Grid>
          )}
        </Container>
      </MK.Box>
    </MK.Box>
  );
};

// Typechecking props for the DefaultFooter
PageFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])),
};

export default PageFooter;

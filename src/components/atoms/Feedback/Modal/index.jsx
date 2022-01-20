/** @format */

import { useState } from 'react';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import { Divider, MuiModal } from '@mui/material';

// @mui icons
import CloseIcon from '@mui/icons-material/Close';

// Material Kit 2 React components
import { MKBox, MKButton, MKTypography } from 'components';

const SimpleModal = ({
  title,
  content,
  actions,
  onClose,
  primary,
  secondary,
  bgColor,
  children,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => setIsVisible(!isVisible);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else toggleModal();
  };

  const contentNode =
    typeof content === 'string' ? (
      <MKTypography variant='body2' color='secondary' fontWeight='regular'>
        {content}
      </MKTypography>
    ) : (
      content
    );
  const primaryAction =
    typeof primary === 'string' ? (
      <MKButton variant='gradient' color='info'>
        {primary}
      </MKButton>
    ) : (
      primary
    );
  const secondaryAction =
    typeof secondary === 'string' ? (
      <MKButton variant='gradient' color='light'>
        {secondary}
      </MKButton>
    ) : (
      secondary
    );
  const titleNode =
    typeof title === 'string' ? <MKTypography variant='h5'>{title}</MKTypography> : title;

  return (
    <MuiModal open={isVisible} onClose={handleClose} sx={{ display: 'grid', placeItems: 'center' }}>
      <MKBox
        position='relative'
        width='500px'
        display='flex'
        flexDirection='column'
        borderRadius='xl'
        bgColor={bgColor}
        shadow='xl'
        {...props}
      >
        <MKBox display='flex' alginItems='center' justifyContent='space-between' p={2}>
          {titleNode}
          <CloseIcon fontSize='medium' sx={{ cursor: 'pointer' }} onClick={handleClose} />
        </MKBox>
        <Divider sx={{ my: 0 }} />
        <MKBox p={2}>
          {contentNode}
          {children}
        </MKBox>
        <Divider sx={{ my: 0 }} />
        <MKBox display='flex' justifyContent='flex-end' p={1.5}>
          <MKBox display='flex' justifyContent='space-between' p={1.5} width='60%'>
            {secondaryAction}
            {primaryAction}
          </MKBox>
        </MKBox>
      </MKBox>
    </MuiModal>
  );
};

SimpleModal.defaultProps = {
  bgColor: 'white',
};

SimpleModal.propTypes = {
  actions: PropTypes.node,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  onClose: PropTypes.func,
  primary: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  secondary: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

export const Modal = SimpleModal;

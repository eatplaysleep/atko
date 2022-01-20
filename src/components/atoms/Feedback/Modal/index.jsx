/** @format */

import { useState } from 'react';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import { Divider, MuiModal } from '@mui/material';

// @mui icons
import CloseIcon from '@mui/icons-material/Close';

// Material Kit 2 React components
import MK from 'components/material-ui-kit';

const Modal = ({
  actions,
  bgColor,
  children,
  content,
  label,
  onClick,
  onClose,
  primary,
  secondary,
  title,
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
      <MK.Typography variant='body2' color='secondary' fontWeight='regular'>
        {content}
      </MK.Typography>
    ) : (
      content
    );
  const primaryAction =
    typeof primary === 'string' ? (
      <MK.Button variant='gradient' color='info'>
        {primary}
      </MK.Button>
    ) : (
      primary
    );
  const secondaryAction =
    typeof secondary === 'string' ? (
      <MK.Button variant='gradient' color='light'>
        {secondary}
      </MK.Button>
    ) : (
      secondary
    );
  const titleNode =
    typeof title === 'string' ? <MK.Typography variant='h5'>{title}</MK.Typography> : title;

  return (
    <>
      <MK.Box>
        <MK.Button variant='gradient' color='info' onClick={onClick ?? toggleModal}>
          {label}
        </MK.Button>
      </MK.Box>
      <MuiModal
        open={isVisible}
        onClose={handleClose}
        sx={{ display: 'grid', placeItems: 'center' }}
      >
        <MK.Box
          position='relative'
          width='500px'
          display='flex'
          flexDirection='column'
          borderRadius='xl'
          bgColor={bgColor}
          shadow='xl'
          {...props}
        >
          <MK.Box display='flex' alginItems='center' justifyContent='space-between' p={2}>
            {titleNode}
            <CloseIcon fontSize='medium' sx={{ cursor: 'pointer' }} onClick={handleClose} />
          </MK.Box>
          <Divider sx={{ my: 0 }} />
          <MK.Box p={2}>
            {contentNode}
            {children}
          </MK.Box>
          <Divider sx={{ my: 0 }} />
          <MK.Box display='flex' justifyContent='flex-end' p={1.5}>
            <MK.Box display='flex' justifyContent='space-between' p={1.5} width='60%'>
              {secondaryAction}
              {primaryAction}
            </MK.Box>
          </MK.Box>
        </MK.Box>
      </MuiModal>
    </>
  );
};

Modal.defaultProps = {
  bgColor: 'white',
};

Modal.propTypes = {
  actions: PropTypes.node,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  label: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  primary: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  secondary: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
};

export default Modal;

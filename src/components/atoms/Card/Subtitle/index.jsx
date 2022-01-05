/** @format */

import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './style';

const useStyles = makeStyles(styles);

const CardSubtitle = props => {
	const classes = useStyles();
	const { className, children, plain, type, ...rest } = props;
	const cardSubtitleClasses = classNames({
		[classes.cardSubtitle]: true,
		[className]: className !== undefined,
	});
	const Wrapper = type;
	return (
		<Wrapper className={cardSubtitleClasses} {...rest}>
			{children}
		</Wrapper>
	);
};

CardSubtitle.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	plain: PropTypes.bool,
	children: PropTypes.node,
};

CardSubtitle.defaultProps = {
	type: 'h6',
};

export default CardSubtitle;

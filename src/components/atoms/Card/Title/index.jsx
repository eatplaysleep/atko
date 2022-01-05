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

const CardTitle = props => {
	const classes = useStyles();
	const { className, children, type, plain, ...rest } = props;
	const cardTitleClasses = classNames({
		[classes.cardTitle]: true,
		[className]: className !== undefined,
	});
	const Wrapper = type;
	return (
		<Wrapper className={cardTitleClasses} {...rest}>
			{children}
		</Wrapper>
	);
};

CardTitle.propTypes = {
	className: PropTypes.string,
	type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	plain: PropTypes.bool,
	children: PropTypes.node,
};

CardTitle.defaultProps = {
	type: 'h4',
};

export default CardTitle;

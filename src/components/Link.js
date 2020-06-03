import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd-mobile';

const Link = ({active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>;
    }
    return (
        <a href='baidu.com' onClick={e => {
            e.preventDefault();
            onClick();
        }}>
            {children}
        </a>
    );
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;

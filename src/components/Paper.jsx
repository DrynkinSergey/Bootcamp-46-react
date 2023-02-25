import PropTypes from 'prop-types';
import React from 'react';

export const Paper = (props) => {
    const styles = {
        width: '140px',
        height: '140px',
        borderRadius: '12px',
        margin: '10px',
        padding: '5px',
        backgroundColor: props.color || 'grey',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
    return (
        <li style={styles}>{props.children}</li>
    )
}
Paper.propTypes = {
    children: PropTypes.node.isRequired,
};
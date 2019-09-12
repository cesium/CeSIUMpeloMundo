import React from 'react';
import PropTypes from 'prop-types';

import CONFIG from '../data/config.json';

const Pin = ({ text, image = 'pin.png', year }) => (
    <div>
        <img height={CONFIG.pin.height} src={require(`../images/${image}`)} alt={`${text} (${year})`} />
    </div>
);

Pin.propTypes = {
    text: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image: PropTypes.string
};

export default Pin;

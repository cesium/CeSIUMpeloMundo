import React from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';

import CONFIG from '../data/config.json';
import STYLES from '../data/styles.json';

const Map = ({ children = null, ...props }) => (
    <GoogleMap bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY
    }} options={{
        styles: STYLES
    }} defaultZoom={CONFIG.zoom} defaultCenter={CONFIG.center} {...props}>
        {children}
    </GoogleMap>
);

Map.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

export default Map;

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import 'normalize.css';

import Map from './components/Map';
import Pin from './components/Pin';

import MARKERS from './data/markers.json';

import * as serviceWorker from './util/serviceWorker';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`;

const CeSIUMpeloMundo = () => (
    <Wrapper>
        <Map>
            {MARKERS.map(marker => (
                <Pin lat={marker.lat} lng={marker.lng} year={marker.year} image={marker.image} text={marker.text} />
            ))}
        </Map>
    </Wrapper>
);

ReactDOM.render(<CeSIUMpeloMundo />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

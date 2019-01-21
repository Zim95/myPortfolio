import React from 'react';

//material design
import {Drawer} from 'react-mdl';

//hoc
import Navigation from '../Navigation/Navigation';

const drawer = (props) => (
    <Drawer title="Title">
        <Navigation/>
    </Drawer>
            
);

export default drawer;
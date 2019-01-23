import React from 'react';

//material design
import {Drawer} from 'react-mdl';

//hoc
import Navigation from '../Navigation/Navigation';

const drawer = (props) => (
    <Drawer title="Namah Shrestha">
        <Navigation/>
    </Drawer>
            
);

export default drawer;
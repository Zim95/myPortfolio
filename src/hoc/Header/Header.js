import React from 'react';

//material design
import {Header} from 'react-mdl';

//hoc component
import Navigation from '../Navigation/Navigation';

const header = () => (
    <Header title="Namah Shrestha" scroll>
            <Navigation/>
    </Header>
);

export default header;
import React from 'react';

//material design
import {Header} from 'react-mdl';

//hoc component
import Navigation from '../Navigation/Navigation';

//css design
import './Header.css';

const header = () => (
    <Header title="Namah Shrestha" scroll className="Header">
            <Navigation/>
    </Header>
);

export default header;
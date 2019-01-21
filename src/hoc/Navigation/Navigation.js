import React from 'react';

//material design
import {Navigation} from 'react-mdl';

//navlink from router
import {NavLink} from 'react-router-dom';

const navigation = () => (
    <Navigation>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </Navigation>
);

export default navigation;
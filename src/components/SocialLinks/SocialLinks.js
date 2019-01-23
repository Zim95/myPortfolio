import React from 'react';

import SocialLink from './SocialLink/SocialLink';

import './SocialLinks.css';

const socialLinks = (props) => {
    const linkArray = props.links.map(item=>(
        <SocialLink key={item.name} icon={item.icon} to={item.to}/>
    ));

    return (
        <div className="SocialLinks">
            {linkArray}
        </div>
    );
           
};

export default socialLinks;
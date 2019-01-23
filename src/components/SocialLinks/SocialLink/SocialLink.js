import React from 'react';

import './SocialLink.css';

const socialLink = (props) => {
    
    return (
        <a className="SocialLinkTag" href={props.to}>
            <i className={props.icon} aria-hidden="true"></i>
        </a>
    );
};

export default socialLink;
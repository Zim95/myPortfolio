import React from 'react';

import {List,ListItem,ListItemContent} from 'react-mdl';

import './ListWithIcons.css';

const listWithIcons = (props) => {
    console.log(props);
    return (
        <div className="ContactList">
            <List>
                <ListItem>
                    <ListItemContent style={{fontSize:'2em'}}><i className="fa fa-phone-square"></i>{props.details.phone}</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize:'2em'}}><i className="fa fa-envelope"></i>{props.details.email}</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent style={{fontSize:'2em'}}><i className="fa fa-map-marker"></i>{props.details.address}</ListItemContent>
                </ListItem>
            </List>
        </div>  
    );
};

export default listWithIcons;
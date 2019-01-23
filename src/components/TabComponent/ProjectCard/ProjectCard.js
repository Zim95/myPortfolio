import React from 'react';
import {Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu} from 'react-mdl';

const projectCard = (props) => { 
    return (
        <Card shadow={0} style={{width: '100%', margin: '10px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${props.imgUrl}) center / cover`}}>{props.name}</CardTitle>
            <CardText>
                {props.description}
            </CardText>
            <CardText>
                <strong style={{textAlign:'left'}}>Tools Used:</strong>
                <ul style={{textAlign:'left'}}>{props.tech.map(item=><li key={item}>{item}</li>)}</ul> 
            </CardText>
            <CardActions border>
                <Button colored><a href={props.githubLink} style={{textDecoration:"none"}}>GITHUB</a></Button>
                <Button colored><a href={props.deploymentLink} style={{textDecoration:"none"}}>LIVEDEMO</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    );
};

export default projectCard;
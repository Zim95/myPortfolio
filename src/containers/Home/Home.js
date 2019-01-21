import React, {Component} from 'react';

import classes from './Home.css';

class Home extends Component{
    render(){
        return (
            <div className={classes.Home}>
                <h1>This is home</h1>
            </div>
        );
    }
}

export default Home;
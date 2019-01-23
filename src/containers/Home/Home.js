import React, {Component} from 'react';

import './Home.css';

import {Grid,Cell} from 'react-mdl';

import avatar from '../../assets/images/avatar1.png';

import SocialLinks from '../../components/SocialLinks/SocialLinks';

class Home extends Component{
    state = {
        title: "Full Stack Developer",
        social:[
            {
                name: 'Stack Overflow',
                icon: 'fa fa-stack-overflow',
                to: 'https://stackoverflow.com/users/8098905/namah'
            },
            {
                name: 'Github',
                icon: 'fa fa-github',
                to: 'https://github.com/Zim95'
            },
            {
                name: 'LinkedIn',
                icon: 'fa fa-linkedin',
                to: 'https://www.linkedin.com/in/namah-shrestha-1b785a144/?fbclid=IwAR0NUXzxEytOtDJBhMuxpZplYEtpWekB-GvMcFagFoGeRjt9PH2qhAd7oJI'
            }
        ]
    };

    render(){
        return (
            <div className="Home">
                <Grid className="home-grid">
                    <Cell col={12}>
                        <img className="avatar" src={avatar} alt="MyAvatar"/>
                        <div className="banner">
                            <h1>{this.state.title}</h1>
                            <hr/>
                            <br/>
                            <SocialLinks links={this.state.social}/>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Home;
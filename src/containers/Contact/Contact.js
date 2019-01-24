import React, {Component} from 'react';

import './Contact.css';

import {Cell,Grid} from 'react-mdl';
import avatar from '../../assets/images/avatar1.png';

import ListWithIcons from '../../components/ListWithIcons/ListWithIcons';

class Contact extends Component{
    state={
        description: "Cool! You made it here. My contact details are on this page. You have my email, my phone number and my current location. A little about me though, I am a fullstack developer. I work with anything and everything you challenge me with that involves programming. I completely love the profession and am in it for life. My main skills are listed in the Resume section but don't let that fool you. I am full of surprises. I have always adapted to any work that I have been assigned and I assure you that if I do not already know of any task you assign me, I will literally pull out all nighters to get it done. I am also always open to improvements as I do believe that one does make mistakes when working on something new. But nothing a bit of research and hard-work cannot fix. So, feel free to hit me up and thanks alot for stopping by.",
        details:{
            phone: "+91-9606258452",
            email: "shresthanamah@gmail.com",
            address: "Bengaluru, Karnataka-560078"
        }
    }
    render(){
        return (
            <div className="Contact">
                <Grid className="contact-grid">
                    <Cell col={6} className="contactCellA">
                        <h1><strong>Namah Shrestha</strong></h1>
                        <img className="avatarSecond" src={avatar} alt="MyAvatar"/>
                        <p>{this.state.description}</p>
                    </Cell>
                    <Cell col={6} className="contactCellB">
                    <h1><strong>CONTACT ME</strong></h1>
                    <hr/>
                    <ListWithIcons details={this.state.details}/>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
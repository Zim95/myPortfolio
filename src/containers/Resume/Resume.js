import React, {Component} from 'react';

import './Resume.css';

import {Grid,Cell} from 'react-mdl';

import avatar from '../../assets/images/avatar1.png';

class Resume extends Component{
    state={
        name: "Namah Shrestha",
        designation: "Full Stack Developer",
        about: "Energetic software engineer with 1+ years experience developing code for fun and productivity. Open to improvement and always excited to work on new technology.",
        personalDetails:{
            hobbies: "Music, Programming",
            email: "shresthanamah@gmail.com",
            phone: "9606258452",
            address: "15, Ramana Rd, 5th Phase, Ayodya Nagar, J P Nagar Phase 5, JP Nagar, Bengaluru, Karnataka 560078",
            permanentAddress: "Limbu Basti, Sarojini Pally, 2.5 Mile Sevoke Road, Checkpost, Siliguri, West Bengal - 734008"
        },
        education:[
            {
                institute: "Sikkim Manipal Institute of Technology",
                duration: "2013-2017",
                type: "UG",
                degree: "Bachelors of Technology (B.Tech)",
                stream: "Information Technology",
                score: "8.03/10.00 (CGPA)"
            },
            {
                institute: "Campion Higher Secondary School",
                duration: "2011-2013",
                type: "Class 12",
                degree: "Higher Secondary Education Board (HSEB)",
                stream: "Science",
                score: "58.5/100.0 (Percentage)"
            },
            {
                institute: "Campion High School",
                duration: "2011",
                type: "Class 10",
                degree: "School Leaving Certificate (SLC)",
                stream: null,
                score: "83.75/100.0 (Percentage)"
            }
        ],
        experience:[
            {
                company: "Afterglow Tech",
                desc: "Smart Street Lighting Solutions | Bengaluru, Karnataka",
                role: "FullStack Developer",
                duration: "02/10/2017 - 05/12/2018",
                jobDesc: [
                    {
                        name: "Front-End UI Development",
                        technologies: ["JQuery", "BootStrap3", "HTML5", "CSS3", "Bitbucket", "Git"]
                    },
                    {
                        name: "Serverless Backend Development with AWS",
                        technologies: ["AWS API Gateway", "AWS Cognito", "AWS DynamoDB", "AWS Lambda", "AWS IOT with IOT rules", "AWS S3"]
                    },
                    {
                        name: "IOT development with Raspberry PI",
                        technologies: ["Python 3.5", "MQTT Client", "Linux (Raspbian)", "SSH", "Git", "Bitbucket", "Basic Shell Scripting"]
                    }
                ]
            }
        ],
        skills:{
            programmingLanguages: ["Python 2/3", "Javascript(ES5/ES6)", "PHP", "Java (Basic)", "C++(Basic)"],
            databases: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
            versionControl:["Git"],
            frameworks:["Django 2.0 (REST, Jinja)", "NodeJS/ExpressJS", "ReactJS", "JQuery"],
            test:["Jest", "Enzyme"],
            buildTool: ["WebPack"],
            cloudTechnology:["AWS"],
            webServer:["Nginx (Basic)"],
            webServices:["REST","GRAPHQL"],
            webProtocols:["HTTP/HTTPS","MQTT"]
        }
    };
    render(){
        return (
            <div className="Contact">
                <Grid className="resumeGridDesktop">
                    <Cell col={4} className="resumeCellA">
                        <img className="avatarThird" src={avatar} alt="MyAvatar"/>
                        <div className="alignLeft">
                            <h2>{this.state.name}</h2>
                            <h4>{this.state.designation}</h4>
                            <hr/>
                            <p>{this.state.about}</p>
                            <br/>
                            <p><strong>Personal Details:</strong></p>
                            {Object.keys(this.state.personalDetails).map(item=>{
                                return <p key={item}><strong>{item.toUpperCase()}:</strong> {this.state.personalDetails[item]}</p>
                            })}
                        </div>
                    </Cell>
                    <Cell col={8} className="resumeCellB">
                        <div className="alignLeft">
                            <h2 style={{color:"white", padding: "10px"}}>Education</h2>
                            {this.state.education.map(item=>{
                                return (
                                    <div key={item.institute}>
                                        <p><strong style={{color:"white", padding:"10px"}}>{item.institute} ({item.duration}):</strong></p>
                                        <p style={{color:"white", paddingLeft:"10px"}}>Type: {item.type}</p>
                                        <p style={{color:"white", paddingLeft:"10px"}}>Degree: {item.degree}</p>
                                        {item.stream?<p style={{color:"white", paddingLeft:"10px"}}>Stream: {item.stream}</p>:null}
                                        <p style={{color:"white", paddingLeft:"10px"}}>Score: {item.score}</p>
                                        <br/>
                                    </div>
                                );
                            })}
                        </div>
                        <hr/>
                        <div className="alignLeft">
                            <h2 style={{color:"white", padding: "10px"}}>Experience</h2>
                            {this.state.experience.map(item=>{
                                return (
                                    <div key={item.company}>
                                        <p><strong style={{color:"white", padding:"10px"}}>{item.company} ({item.duration}):</strong></p>
                                        <p style={{color:"white", paddingLeft:"10px"}}>{item.desc}</p>
                                        <p style={{color:"white", paddingLeft:"10px"}}>Role: {item.role}</p>
                                        <p style={{color:"white", paddingLeft:"10px"}}>Job Responsibilities:</p>
                                        {item.jobDesc.map(item=>{
                                            return (
                                                <p key={item.name} style={{color:"white", paddingLeft:"10px"}}>-<strong>{item.name}:</strong> {item.technologies.join(", ")}</p>
                                            );
                                        })}
                                        <br/>
                                    </div>
                                );
                            })}
                        </div>
                        <hr/>
                        <div className="alignLeft">
                            <h2 style={{color:"white", padding: "10px"}}>Skills</h2>
                            {Object.keys(this.state.skills).map(item=>{
                                return (
                                    <div className="alignLeft" key={item}>
                                        <p><strong style={{color:"white", padding:"10px"}}>{item.toUpperCase()}:</strong></p>
                                        <ul>
                                            {this.state.skills[item].map(el=>{
                                                return <li style={{color:"white"}}>{el}</li>
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
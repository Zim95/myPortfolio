import React, {Component} from 'react';

import './Projects.css';

import {Tabs, Tab} from 'react-mdl';

import TabComponent from '../../components/TabComponent/TabComponent';

class Projects extends Component{
    state = {
        activeTab: 0,
        projects: {
            react:{
                title: "A SET OF SELF MADE REACTJS PROJECTS",
                imgUrl:'https://cdn.worldvectorlogo.com/logos/react-1.svg',
                list: [
                    {
                        id:"react1",
                        name: "Portfolio",
                        description: "Portfolio site built upon ReactJS. Alot of code refactoring to be done. Redux to be added. Firebase to be added.",
                        tech:["ReactJS", "React-MDL"],
                        deploymentLink: "#",
                        githubLink: "#"
                    },
                    {
                        id:"react2",
                        name: "React Weather App",
                        description: "First React JS project. Basic weather forecaster app that makes API calls to openweathermap API.",
                        tech:["ReactJS", "OpenWeatherMapAPI"],
                        deploymentLink: "#",
                        githubLink: "#"
                    },
                    {
                        id:"react3",
                        name: "Burger Builder App",
                        description: "Burger Builder App built upon ReactJS and Firebase.",
                        tech:["ReactJS", "Redux", "Axios", "Jest and Enzyme for test", "Firebase Realtime Database", "Firebase Auth"],
                        deploymentLink: "#",
                        githubLink: "#"
                    },
                    {
                        id:"react4",
                        name: "Simple Poll App",
                        description: "Front end for Simple poll app designed in React JS.",
                        tech:["ReactJS", "Redux", "Axios", "Ant Design", "Django 2.0 Rest Framework", "SQLite for database"],
                        deploymentLink: "#",
                        githubLink: "#"
                    },
                    {
                        id:"react5",
                        name: "Dev Connect",
                        description: "A Simple Social network app to connect developers.",
                        tech:["ReactJS", "Redux", "Axios", "BootStrap", "ExpressJS", "MongoDB", "PassportJS"],
                        deploymentLink: "#",
                        githubLink: "#"
                    }
                ]
            },
            angular: {
                title: "A SET OF SELF MADE ANGULAR PROJECTS",
                imgUrl:'',
                list:[]
            },
            node:{
                title: "A SET OF SELF MADE NODEJS(CORE/FRAMEWORK) PROJECTS",
                imgUrl:'',
                list:[]
            },
            python:{
                title: "A SET OF SELF MADE PYTHON(CORE/FRAMEWORK) PROJECTS",
                imgUrl:'',
                list:[]
            },
            misc:{
                title: "A set of projects implemented at work or during college. The code and live demo for these projects are unavailable due to copyright laws.",
                imgUrl:'',
                list:[]
            }
        }
    };

    // Simple header with scrollable tabs
    render() {
        let tabContent = null;
        switch(this.state.activeTab){
            case 0: tabContent = <TabComponent title={this.state.projects.react.title} imgUrl={this.state.projects.react.imgUrl} projectList = {this.state.projects.react.list}/>; break;
            case 1: tabContent = <TabComponent title={this.state.projects.angular.title} imgUrl={this.state.projects.angular.imgUrl} projectList = {this.state.projects.angular.list}/>; break;
            case 2: tabContent = <TabComponent title={this.state.projects.node.title} imgUrl={this.state.projects.node.imgUrl} projectList = {this.state.projects.node.list}/>; break;
            case 3: tabContent = <TabComponent title={this.state.projects.python.title} imgUrl={this.state.projects.python.imgUrl} projectList = {this.state.projects.python.list}/>; break;
            case 4: tabContent = <TabComponent title={this.state.projects.misc.title} imgUrl={this.state.projects.misc.imgUrl} projectList = {this.state.projects.misc.list}/>; break;
            default:break;
        }

        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJS</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Python</Tab>
                    <Tab>Misc</Tab>
                </Tabs>
                <section>
                    <div className="content">
                        {tabContent}
                    </div>
                </section>
            </div>    
        );
    }
}

export default Projects;
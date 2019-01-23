import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import './TabComponent.css';
import Aux from '../../hoc/Auxillary/Auxillary';

const tabComponent = (props) => {
    let projectListComponent = null;

    if(props.projectList.length === 0){
        projectListComponent = (
            <div className="NoProjects">
                <p>The projects for this section are being completed and will be added as soon as they are deployed.</p>
            </div>
        );
    }else{
        projectListComponent = props.projectList.map(item=>(
            <ProjectCard key={item.id} name={item.name} imgUrl={props.imgUrl} description={item.description} tech={item.tech} deploymentLink={item.deploymentLink} githubLink={item.githubLink}/>
        ));
    }
    
    return (
        <Aux>
            <div className="NoProjects">
                <p>{props.title}</p>
            </div>
            <div className="TabComponent">
                {projectListComponent}
            </div>
        </Aux>
    );
};

export default tabComponent;
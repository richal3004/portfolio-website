import classes from './projectBlock.module.css';
import ProjectContent from './ProjectContent/projectContent';

const projectBlock=(props)=>{
    return(
        <div className={classes.ProjectBlock}>
            <div className={classes.ProjectLogo}>
                <img src={props.project.logo} alt="logo" style={{width:"80px", height:"80px"}}/>
            </div>
             <ProjectContent 
                projectTitle={props.project.content.title} 
                projectText={props.project.content.info}
                projectTags={props.project.content.tags}
                link={props.project.content.link}
                />

        </div>
    )
}

export default projectBlock;
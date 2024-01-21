import Tag from '../../../../UI/TagBar/Tag/Tag';
import classes from './projectContent.module.css';


const projectContent=(props)=>{

    var projectTags = props.projectTags;

    projectTags=projectTags.split(",");


    return(
    
    <div className={classes.ProjectContent}>
        <div className={classes.ProjectTitle}>{props.projectTitle}</div>
        
            <div className={classes.ProjectText}>{props.projectText}
            </div>

        <div className={classes.ProjectTags}>
            {projectTags.map((x)=>(<Tag text={x}/>))}
        </div>   
        {props.link}
      </div>
       

    )
}
export default projectContent;
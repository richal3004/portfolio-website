import classes from "./Project.module.css";
import TagBar from "../../UI/TagBar/TagBar";
import Subtitle from "../../UI/Subtitle/Subtitle";
import logo from '../../assets/Logo.png'
import ProjectBlock from './ProjectBlock/projectBlock';



const projectList = [
    {
      logo: logo,
      content: {
        title: "Fiskil",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tags: "React, JS, HTML, CSS",
        link: "link"
      },
      
    },
    {
        logo: logo,
      content: {
        title: "Fiskil",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tags: "React, JS, HTML, CSS",
        link: "link"
      },
      },{
      logo: logo,
      content: {
        title: "Fiskil",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        tags: "React, JS, HTML, CSS",
        link: "link"
      },
    }
    
  ];

const Project=(props)=>{
    return(
        <div className={classes.project}>
            <div className={classes.projectContainer}>
                <TagBar tagText="Projects" />
                <Subtitle subtitle="Some of the noteworthy projects I have built:" />
                {projectList.map((project, index)=>(<ProjectBlock key={index} project={project}/>))}
            </div>
        </div>
    )
}
export default Project;
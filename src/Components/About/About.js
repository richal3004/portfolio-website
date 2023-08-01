import AboutContent from "./AboutContent/AboutContent";
import classes from "./About.module.css"
import ProfilePic from "../../assets/ProfilePic.jpeg";
import TagBar from "../../UI/TagBar/TagBar";

const About=(props)=>{
    return(
    <div className={classes.About}>
        <div className={classes.AboutBox}>
            <TagBar tagText={"About Me"}/>
            <div className={classes.Box}>
                <div className={classes.PhotoBox}> 
                    <div className={classes.PhotoContainer}>
                        <img src={ProfilePic} alt="ProfilePic"/>  
                    </div>
                </div>
                <AboutContent/>
            </div>
           
        </div>
        
        
    </div>
    )
}
export default About;
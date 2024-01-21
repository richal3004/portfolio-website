import IntroContent from "./IntroContent/IntroContent";
import classes from "./Intro.module.css"
import ProfilePic from "../../assets/ProfilePic.jpeg";


const Intro=(props)=>{
    return(
    <div className={classes.Intro}>
        <IntroContent/>
        <div className={classes.PhotoContainer}>
            <img src={ProfilePic} alt="ProfilePic"/>  
        </div>
    </div>
    )
}
export default Intro;
import IntroContent from "./IntroContent/IntroContent";
import classes from "./Intro.module.css"
import PhotoContainer from "../../UI/PhotoContainer/PhotoContainer";

const Intro=(props)=>{
    return(
    <div className={classes.Intro}>
        <IntroContent/>
        <PhotoContainer />
        <PhotoContainer />
    </div>
    )
}
export default Intro;
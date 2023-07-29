import classes from './IntroContent.module.css';
const IntroContent=(props)=>{
    return(
    <div className={classes.IntroContent}>
        <p className={classes.TitleName}>Hello, I'm Harsh Shah</p>
        <p className={classes.TitleText}>
        I'm a full stack developer (React.js & Node.js) 
        with a focus on creating (and occasionally designing) 
        exceptional digital experiences that are 
        fast, accessible, visually appealing, and responsive. 
        Even though I have been creating web applications for 
        over 7 years, I still love it as if it was something new.
        </p>

    </div>
    )
}
export default IntroContent;
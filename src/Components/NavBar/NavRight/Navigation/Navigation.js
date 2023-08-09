import NavItem from "./NavItem/NavItem";
import classes from "./Navigation.module.css";

const Navigation =(props)=>{
    return(
        <div className={classes.Navigation}>
            <NavItem title="About" LinkTo="#About"/>
            <NavItem title="Experience" LinkTo="#Experience"/>
            <NavItem title="Projects" LinkTo="#Projects"/>
            <NavItem title="Contact" LinkTo="#Contact" />
        </div>
    )
}

export default Navigation;
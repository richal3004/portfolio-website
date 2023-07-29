import NavItem from "./NavItem/NavItem";
import classes from "./Navigation.module.css";

const Navigation =(props)=>{
    return(
        <div className={classes.Navigation}>
            <NavItem title="About" />
            <NavItem title="Experience" />
            <NavItem title="Projects" />
            <NavItem title="Contact" />
        </div>
    )
}

export default Navigation;
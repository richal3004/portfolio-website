import Navigation from "./Navigation/Navigation";
import NavAction from "./NavAction/NavAction";
import classes from "./NavRight.module.css";

const NavRight=(props)=>{
    return(
        <div>
            <div className={classes.NavRight}>
                <Navigation />
                <div className={classes.vl}></div>
                <NavAction />
            </div>    
        </div>
        
    )
}

export default NavRight;

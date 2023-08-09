import React from "react";
import AppLogo from "./AppLogo";
import NavRight from "./NavRight/NavRight";
import classes from './NavBar.module.css';

const NavBar =(props)=>{
    return(
    <div>
        <div className={classes.NavBar}>
            <AppLogo />
            <NavRight />
        </div>
        
    </div>    
    
    
    )
}

export default NavBar;  
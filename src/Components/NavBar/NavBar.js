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
            <div className={classes.HamburgerIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 12H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 6H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 18H20" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        
    </div>    
    
    
    )
}

export default NavBar;  
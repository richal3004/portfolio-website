import logo from '../../assets/harsh-logo.png';
import classes from './AppLogo.module.css';
const AppLogo =(props)=>{
    // style={{width:150+ "px", padding:1+'rem'}}
    return(
        <div>
            <img src={logo} alt="logo" className={classes.logo} />
        </div>
    )
}

export default AppLogo;
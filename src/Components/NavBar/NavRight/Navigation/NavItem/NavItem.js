import {HashLink as Link} from 'react-router-hash-link';
import classes from './NavItem.module.css';

const NavItem =(props)=>{
    return(
        <Link className={classes.NavItem} to={props.LinkTo} smooth>{props.title}</Link>
    )
}

export default NavItem;
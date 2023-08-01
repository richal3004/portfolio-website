import classes from "./Skills.module.css"
const skills =(props)=>{
    const column1=[js, reactjs, nodejs]
    const column2=[html, java, figma]
    return(
        <div className={classes.skills}>
            <SkillRow AddSkills={colum1}/> 
            <SkillRow AddSkills={colum2}/>
        </div>
    )
}

export default skills;
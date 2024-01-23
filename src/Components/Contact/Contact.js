import TagBar from '../../UI/TagBar/TagBar';
import classes from './Contact.module.css';
import Subtitle from '../../UI/Subtitle/Subtitle';

const Contact=(props)=>{

    return(
    <div className={classes.Contact} id="Contact">
        <div className={classes.ContactContainer}>
            <TagBar tagText="Contact"/>
            <Subtitle subtitle="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect."/>
            <div className={classes.ContactInfo}>
                <p>harshnshah2424@gmail.com</p>
            <div>
                <svg className={classes.PhoneIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3333 22.56V26.56C29.3349 26.9313 29.2588 27.2989 29.11 27.6391C28.9613 27.9793 28.7431 28.2848 28.4695 28.5358C28.1958 28.7868 27.8728 28.9779 27.521 29.0969C27.1692 29.2159 26.7965 29.2601 26.4267 29.2266C22.3238 28.7808 18.3827 27.3788 14.92 25.1333C11.6985 23.0862 8.96713 20.3549 6.92001 17.1333C4.66665 13.6549 3.26434 9.69463 2.82668 5.5733C2.79336 5.20459 2.83718 4.83298 2.95535 4.48213C3.07351 4.13128 3.26344 3.80889 3.51303 3.53546C3.76263 3.26204 4.06642 3.04358 4.40507 2.894C4.74372 2.74441 5.1098 2.66698 5.48001 2.66663H9.48001C10.1271 2.66026 10.7544 2.8894 11.245 3.31134C11.7357 3.73328 12.0561 4.31923 12.1467 4.95997C12.3155 6.24006 12.6286 7.49694 13.08 8.70663C13.2594 9.18387 13.2982 9.70252 13.1919 10.2011C13.0855 10.6998 12.8385 11.1574 12.48 11.52L10.7867 13.2133C12.6848 16.5514 15.4486 19.3152 18.7867 21.2133L20.48 19.52C20.8425 19.1615 21.3002 18.9144 21.7988 18.8081C22.2975 18.7018 22.8161 18.7406 23.2933 18.92C24.503 19.3714 25.7599 19.6845 27.04 19.8533C27.6877 19.9447 28.2792 20.2709 28.7021 20.77C29.1249 21.269 29.3496 21.9061 29.3333 22.56Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                +1 905-782-0391
            </div>
            </div>
            <p style={{fontSize:"16px"}}>You may also find me on these platforms!</p>
        </div>
    </div>
    )
}

export default Contact;
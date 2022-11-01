import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem=(props)=>{
    return(
        <div><NavLink to={`${props.id}` } className={({isActive})=> isActive? s.active : s.dialog }>
            {props.name}
        </NavLink></div>
    )
}

export default DialogItem;

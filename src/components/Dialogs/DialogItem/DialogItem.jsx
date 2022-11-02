import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.oneDialogItem}>
            <img className={s.dialogAvatar}  src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt=""/>

                <NavLink to={`${props.id}`} className={({isActive}) => isActive ? s.active : s.dialog}>
                    {props.name}
                </NavLink>
        </div>
)
}

export default DialogItem;

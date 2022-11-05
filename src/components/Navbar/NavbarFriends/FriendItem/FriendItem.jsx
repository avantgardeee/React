import s from './../../Navbar.module.css';
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {
    return (
        <div className={s.navbarIcons}>
            <NavLink to={`dialogs/${props.id}`}>
            <img  src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt=""/>
                    <div className={s.navbarFriendName}>{props.name}</div>
            </NavLink>
        </div>
)
}

export default FriendItem;

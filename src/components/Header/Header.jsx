import s from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header=(props)=>{
    return <header className={s.app__header}>
        <img src='https://olympus.crumina.net/wp-content/uploads/2019/03/logo-colored-2x.png' alt={''}/>
        <div className={s.loginBlock}>
            {props.isAuth?(`${props.userId} ${props.login}`):
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
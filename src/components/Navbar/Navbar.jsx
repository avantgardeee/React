import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarFriendsContainer from "./NavbarFriends/NavbarFriendsContainer";

const Navbar=(props)=>{
    return <nav className={s.app__nav}>
        <div>
            <NavLink to='/profile' className = { navData=> navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div >
            <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div >
            <NavLink to='/news' className = { navData => navData.isActive ?  s.active : s.item }>News</NavLink>
        </div>
        <div>
            <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
        </div >
        <div >
            <NavLink to='/settings' className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
        <div >
            <NavLink to='/friends' className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
        </div>
        <div >
            <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
        </div>
        <div>
            <NavbarFriendsContainer/>
        </div>
    </nav>
}
export default Navbar;
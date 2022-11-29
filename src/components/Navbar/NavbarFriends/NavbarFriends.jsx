import s from './../Navbar.module.css'
import FriendItem from "./FriendItem/FriendItem";
const NavbarFriends = (props) => {
    let FriendsElements=props.state.navbarFriends.map(f=><FriendItem key={f.id} name={f.name} id={f.id}/>)

    return(
    <div>
        <div className={s.friendsItems}>
            {FriendsElements}
        </div>
    </div>

    )

}
export default NavbarFriends;

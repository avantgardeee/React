// import s from './../Navbar.module.css'
import NavbarFriends from "./NavbarFriends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        state: state.sidebar
    }
}
const NavbarFriendsContainer  = connect(mapStateToProps)(NavbarFriends)
export default NavbarFriendsContainer;
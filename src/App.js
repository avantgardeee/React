import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import s from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendItem from "./components/Navbar/NavbarFriends/FriendItem/FriendItem";
import Friends from "./components/Friends/Dialogs";
import {updateNewPostText} from "./redux/state";

const App = (props) => {

    return (
        <div className={'app__wrapper'}>
            <BrowserRouter>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app__wrapper_content'}>
                <Routes>
                    <Route path="/*" element={<Profile
                        profilePage={props.state.profilePage}
                        addPost={props.addPost}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/dialogs*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/friends*" element={<Friends/>}/>
                </Routes>
            </div>
            </BrowserRouter>
        </div>
    );
}


export default App;

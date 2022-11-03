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

const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'app__wrapper'}>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className={'app__wrapper_content'}>
                    <Routes>
                        <Route path="/*" element={<Profile state={props.state.profilePage}/>}/>
                        <Route path="/dialogs*" element={<Dialogs state={props.state.dialogsPage}/>} />
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/friends*" element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;

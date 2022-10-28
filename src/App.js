import logo from './logo.svg';

import './App.css';
const App = () => {

  return (
    <div className={'app__wrapper'}>
        <header className={'app__header'}>
            <img src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
        </header>
        <nav className={'app__nav'}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className={'app__content'} >
            <div>
            <img src={'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    </div >
  );
}




export default App;

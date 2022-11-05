import s from './Myposts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {

    let postsElements=props.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement=React.createRef();

    let addPost=()=>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange=()=>{
        let text=newPostElement.current.value;
        let action=UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Send</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;

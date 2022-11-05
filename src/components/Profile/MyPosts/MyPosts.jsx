import s from './Myposts.module.css';
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {

    let postsElements=props.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)

    let addPost=()=>{
        props.dispatch(addPostActionCreator());
    }
    let onPostChange=(e)=>{
        let text=e.target.value;
        let action=UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}  value={props.newPostText} placeholder={'Enter your post'}/>
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

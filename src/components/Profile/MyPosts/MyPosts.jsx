import s from './Myposts.module.css';
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements=props.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)

    let newPostElement=React.createRef();
    let addPost=()=>{
        let text=newPostElement.current.value;
        props.addPost(text);
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
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

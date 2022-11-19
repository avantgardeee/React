import s from './Myposts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let state = props.profilePage;
    let postsElements=state.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)

    let onAddPost=(values)=>{
        props.addPost(values.newPostText);
    }
    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <AddPostFormRedux onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}

const AddNewPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} placeholder={'Enter your post'} name={"newPostText"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;

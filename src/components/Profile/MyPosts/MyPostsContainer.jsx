import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state=props.store.getState().profilePage

    let addPost=()=>{
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange=(text)=>{
        let action=UpdateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts} newPostText={state.newPostText}/>
    )
}
export default MyPostsContainer;

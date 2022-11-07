import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    // let state = props.store.getState().profilePage


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().profilePage;
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = UpdateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost} posts={state.posts}
                                 newPostText={state.newPostText}
            />}

        }
        </StoreContext.Consumer>

    )
}
export default MyPostsContainer;

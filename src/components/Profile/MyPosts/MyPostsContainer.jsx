import React from "react";
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    console.log(state)
    debugger
    return {
        profilePage: state.profilePage
    }
    debugger
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText:(text)=>{
            dispatch(UpdateNewPostTextActionCreator(text));
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        }
    }
}
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;

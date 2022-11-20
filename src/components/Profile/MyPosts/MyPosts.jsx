import s from './Myposts.module.css';
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import { FormsControl} from "../../common/FormsControls/FormsControls";

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

const maxLength10=maxLengthCreator(10)

const AddNewPostForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormsControl} placeholder={'Enter your post'} name={"newPostText"} validate={[required,maxLength10]} typeField={'textarea'} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddPostFormRedux=reduxForm({form:"ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;

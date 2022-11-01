import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements=props.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Send</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;

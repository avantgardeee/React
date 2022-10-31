import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post message={'Hi, how are you?'} LikesCount={15}/>
            <Post message={"It's my first post"} LikesCount={20}/>
        </div>
    </div>
}
export default MyPosts;

import s from './Myposts.module.css';
import Post from "./Post/Post";
const MyPosts=()=>{
    return <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} LikesCount={15}/>
                <Post message={"It's my first post"} LikesCount={20}/>
            </div>
        </div>
}
export default MyPosts;

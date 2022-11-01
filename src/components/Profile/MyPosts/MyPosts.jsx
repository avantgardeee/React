import s from './Myposts.module.css';
import Post from "./Post/Post";
import {posts} from "../../../index";

const MyPosts = () => {

    let postsElements=posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)

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

import s from './Myposts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts=[
        {id:1, message:'Hi, how are you?', LikesCount:15},
        {id:2, message:"It's my first post",LikesCount:20}
    ];

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

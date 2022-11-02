import s from './Post.module.css';
const  Post=(props)=>{
    return <div>
                <div className={s.item}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/147/147144.png'}/>
                    {props.message}

                    <div>
                    <span>Like</span> {props.LikesCount}
                    </div>
                </div>

        </div>
}
export default Post;

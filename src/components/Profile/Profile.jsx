import s from './Profile.module.css';
const Profile=()=>{
    return <div className={s.app__content} >
        <div>
            <img src={'https://olympus.crumina.net/wp-content/uploads/2019/03/blog-img-bottom.png'}/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    </div>
}
export default Profile;

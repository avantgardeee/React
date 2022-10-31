import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src={'https://olympus.crumina.net/wp-content/uploads/2019/03/blog-img-bottom.png'}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>

        </div>
    )
}
export default ProfileInfo;

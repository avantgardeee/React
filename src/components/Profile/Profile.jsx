import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile=()=>{
    return <div >
        <div>
            <img src={'https://olympus.crumina.net/wp-content/uploads/2019/03/blog-img-bottom.png'}/>
        </div>
        <div>
            ava+description
        </div>
    <MyPosts/>
    </div>
}
export default Profile;

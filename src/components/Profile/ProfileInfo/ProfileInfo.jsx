import s from './ProfileInfo.module.css';
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    let job=()=> {
        if (props.profile.lookingForAJob == true) {
            return <span>ищу работу</span>
        } else return <span>не ищу работу</span>
    }

    return (
        <div>
            <div>
                {/*<img src={'https://olympus.crumina.net/wp-content/uploads/2019/03/blog-img-bottom.png'}/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

            <div>
                {props.profile.fullName}
            </div>
            <div>
                {props.profile.aboutMe}
            </div>
            <div>
                {job()}
            </div>
            <div>
                {props.profile.lookingForAJobDescription}
            </div>

        </div>
    )
}
export default ProfileInfo;

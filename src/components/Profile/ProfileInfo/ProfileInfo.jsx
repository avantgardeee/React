import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src={'https://olympus.crumina.net/wp-content/uploads/2019/03/blog-img-bottom.png'}/>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

            <div>
                {profile.fullName}
            </div>
            <div>
                {profile.aboutMe}
            </div>
            <div>
                {profile.lookingForAJob === true? <span>ищу работу</span> : <span>не ищу работу</span>}
            </div>
            <div>
                {profile.lookingForAJobDescription}
            </div>

        </div>
    )
}
export default ProfileInfo;

import {createField, FormsControl} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css'


const ProfileDataForm = ({profile,handleSubmit,error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>Full name</b>: {createField('Full name', 'fullName', [], FormsControl)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', 'lookingForAJob', [], FormsControl, {type: "checkbox"})}
        </div>
        <div>
            <b>My skills</b>:{createField('My professional skills', 'lookingForAJobDescription', [], FormsControl, {typeField: "textarea"})}
        </div>
        <div>
            <b>About me</b>:{createField('About me', 'aboutMe', [], FormsControl, {typeField: "textarea"})}
        </div>
        <div>
            <b>Contacts</b>:{Object.keys(profile.contacts).map(key => {
            return <div key={key}className={s.contact}>
                <b>{key}:</b>{createField(key, 'contacts.'+key, [], FormsControl)}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm;
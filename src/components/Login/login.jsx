import React from "react";
import {Field, Form, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {createField, FormsControl} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "./../common/FormsControls/FormsControls.module.css"


const LoginForm = ({handleSubmit,error}) => {
    return (<form onSubmit={handleSubmit}>
            {createField('e-mail','email',[required],FormsControl)}
            {createField('password','password',[required],FormsControl,{type:'password'})}
            {createField(null,'rememberMe',[],FormsControl,{type:'checkbox'},'remember me')}

        {error && <div className={style.formSummaryError}>
            {error}
        </div>}

        <button type={'submit'}>Log in</button>
    </form>)
}

const LoginReduxForm=reduxForm({form:'login'})(LoginForm)



const Login=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
        }
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);
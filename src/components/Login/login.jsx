import React from "react";
import {Field, Form, reduxForm} from "redux-form";
import {postLogin} from "../../redux/auth-reducer";
import {required} from "../../utils/validators/validators";
import {FormsControl} from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field type={'text'} name={'email'} placeholder={'e-mail'} component={FormsControl} validate={[required]} typeField={"input"}/>
        </div>

        <div>
            <Field type={'password'} name={'password'} placeholder={'password'}
                   component={FormsControl} validate={[required]} typeField={"input"}/>
        </div>

        <div>
            <Field type={"checkbox"} name={'rememberMe'} component={FormsControl} typeField={"input"}/>remember me
        </div>

        <button type={'submit'}>Log in</button>
    </form>)
}

const LoginReduxForm=reduxForm({form:'login'})(LoginForm)



const Login=(props)=>{
    const onSubmit=(formData)=>{
        console.log(formData)
        postLogin(formData.email,formData.password,formData.rememberMe)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
        }
export default Login;
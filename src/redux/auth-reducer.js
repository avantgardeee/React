import {authAPI, loginApi, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import actions from "redux-form/lib/actions";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
    userId: null,
    email: null,
    login:null,
    isAuth:false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }

}
export const  setAuthUserData= (userId,email,login,isAuth) => ({type: SET_USER_DATA, payload:{userId,email,login,isAuth}});
export const getMeHeader=()=>(dispatch)=>{
    debugger
        return authAPI.getMeHeader()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        dispatch(setAuthUserData(id, email, login,true))
                    }
                }
            )
    }
export const login=(email,password,rememberMe)=>(dispatch)=>{
    console.log(email,password)
        authAPI.Login(email, password, rememberMe,true)
            .then(data => {
                    if (data.resultCode === 0) {
                        debugger
                       dispatch(getMeHeader())
                        }
                    else {
                        let message=data.messages.length>0?data.messages[0]:"Some error"
                        dispatch(stopSubmit("login",{_error:message}))
                    }
                    }
            )
        }

        export const logout=()=>(dispatch)=>{
        authAPI.Logout()
            .then(data => {
                    if (data.resultCode === 0) {
                       dispatch(setAuthUserData(null,null,null,false))
                        }
                    }
            )
        }




export default authReducer;
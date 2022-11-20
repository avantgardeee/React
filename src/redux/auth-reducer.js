import {authAPI, loginApi, usersAPI} from "../api/api";

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
        authAPI.getMeHeader()
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
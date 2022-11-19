import {loginApi, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA';

let initialState = {
    userId: null,
    email: null,
    login:null,
    isFetching:false,
    isAuth:false,
    captcha:true,
    rememberMe:false,
    password:''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
            case SET_LOGIN_DATA:
                debugger
            return {
                ...state,
                ...action.data,
                isAuth: true,

            }
        default:
            return state;
    }

}
export const  setAuthUserData= (userId,email,login) => ({type: SET_USER_DATA, data:{userId,email,login}})
export const  setLoginData= (userId) => ({type: SET_LOGIN_DATA, data:userId})

export const getMeHeader=()=> {
    return (dispatch) => {
        usersAPI.getMeHeader()
            .then(data => {
                    if (data.resultCode === 0) {
                        let {id, login, email} = data.data
                        dispatch(setAuthUserData(id, email, login))
                    }
                }
            )
    }
}
export const postLogin=(email,password,rememberMe,captcha)=> {

        loginApi.postLogin(email, password, rememberMe, captcha)
            .then(data => {
                    if (data.resultCode === 0) {
                        console.log(data.data.userId)
                        let {userId} = data.data
                        debugger
                        return (dispatch) => {
                            dispatch(setLoginData(data.data.userId))
                        }
                    }
                }
            )
    }




export default authReducer;
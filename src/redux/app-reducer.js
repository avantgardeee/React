import {authAPI, loginApi, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import actions from "redux-form/lib/actions";
import {getMeHeader} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized:false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:{
            return {
                ...state,
                initialized:true,
            }
        }
        default:
            return state;
    }

}
export const  initializedSuccess= () => ({type: INITIALIZED_SUCCESS, });
export const initializeApp=()=>(dispatch)=>{
        let promise= dispatch(getMeHeader());
        Promise.all([promise])
            .then(()=>{
                dispatch(initializedSuccess());
            })
    }


export default appReducer;
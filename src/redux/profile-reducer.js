import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', LikesCount: 15},
        {id: 2, message: "It's my first post", LikesCount: 20}
    ],
    profile: null,
    status: '',
    profileUpdateStatus:false,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = action.newPostText
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: newPostText,
                    LikesCount: 0
                }]
            };

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        case UPDATE_STATUS_SUCCESS: {
            return {
                ...state,
                profileUpdateStatus:true
            };
        }
        default:
            return state;
    }

}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
const profileUpdateStatus=()=>({type: UPDATE_STATUS_SUCCESS})

export const getProfileUser = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfileUser(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId=getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfileUser(userId));
        dispatch(profileUpdateStatus());
    }
    else {
        dispatch(stopSubmit("edit-profile",{_error:response.data.messages[0]}))//распарсить строку _error пример "contacts":{"facebook":...
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;
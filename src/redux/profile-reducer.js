import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', LikesCount: 15},
        {id: 2, message: "It's my first post", LikesCount: 20}
    ],
    profile:null,
    status:''
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
               profile:action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
               status:action.status
            };
        }
        default:
            return state;
    }

}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile=(profile)=>({ type:SET_USER_PROFILE, profile})
export const setStatus=(status)=>({ type:SET_STATUS, status})

export const getProfileUser=(userId)=>{
    return (dispatch)=>{
        usersAPI.getProfileUser(userId)
            .then(data => {
                    dispatch(setUserProfile(data))
                }
            )
    }
}
export const getStatus=(userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId)
            .then(data => {
                    dispatch(setStatus(data))
                }
            )
    }
}
export const updateStatus=(status)=>{
    debugger
    return (dispatch)=>{
        profileAPI.updateStatus(status)
            .then(data => {
                    if(data.resultCode===0){
                        dispatch(setStatus(status))
                    }

                }
            )
    }
}




export default profileReducer;
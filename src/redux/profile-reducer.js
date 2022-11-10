const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', LikesCount: 15},
        {id: 2, message: "It's my first post", LikesCount: 20}
    ],
    newPostText: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 5,
                    message: newPostText,
                    LikesCount: 0
                }]
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
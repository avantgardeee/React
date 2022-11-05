const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let store={
    _state:{
        profilePage:{
            posts:[
                {id:1, message:'Hi, how are you?', LikesCount:15},
                {id:2, message:"It's my first post",LikesCount:20}
            ],
            newPostText:'it-kamasutra.com'
        },
        dialogsPage:{
            messages:[
                {id:1, message:'Hi'},
                {id:2, message:'How are you?'},
                {id:3, message:'Yo'}
            ],
            dialogs:[
                {id:1, name:'Dimych'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'},
                {id:4, name:'Sasha'},
                {id:5, name:'Viktor'},
                {id:6, name:'Valera'}
            ],
            newMessageText:'it-kamasutra.com'
        },
        sidebar:{
            navbarFriends:[
                {id:1, name:'Dimych'},
                {id:2, name:'Andrey'},
                {id:3, name:'Sveta'}
            ]
        }
    },
    _callSubscriber(){
        console.log('state changed')
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                LikesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    },
}
export const addPostActionCreator=()=>({type: ADD_POST})
export const UpdateNewPostTextActionCreator=(text)=>
    ({type: UPDATE_NEW_POST_TEXT, newText:text})
export const addMessageActionCreator=()=>({type: ADD_MESSAGE})
export const UpdateNewMessageTextActionCreator=(text)=>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage:text})

export default store;
window.store=store;
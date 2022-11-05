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
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('state changed')
    },
    addPost(){
        let newPost={
            id:5,
            message:this._state.profilePage.newPostText,
            LikesCount:0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText){
        this._state.profilePage.newPostText=newText
        this._callSubscriber(this._state)
    },
    addMessage(){
        let newMessage= {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText='';
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newMessage){
        this._state.dialogsPage.newMessageText=newMessage
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber=observer;
    }
}

export default store;
window.store=store;
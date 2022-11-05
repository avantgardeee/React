let rerenderEntireTree=()=>{
    console.log('state changed')
}

let state={
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
}

export const addPost=()=>{
    let newPost={
        id:5,
        message:state.profilePage.newPostText,
        LikesCount:0
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText='';
    rerenderEntireTree(state)
}
export const updateNewPostText=(newText)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree(state)
}

export const addMessage=()=>{
    let newMessage= {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
        state.dialogsPage.messages.push(newMessage)
        state.dialogsPage.newMessageText='';
        rerenderEntireTree(state)
}
export const updateNewMessageText=(newMessage)=>{
    state.dialogsPage.newMessageText=newMessage
    rerenderEntireTree(state)
}
export const subscribe=(observer)=>{
    rerenderEntireTree=observer;
}
export default state;
let state={
    profilePage:{
        posts:[
            {id:1, message:'Hi, how are you?', LikesCount:15},
            {id:2, message:"It's my first post",LikesCount:20}
        ],
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
        ]
    },
    sidebar:{
        navbarFriends:[
            {id:1, name:'Dimych'},
            {id:2, name:'Andrey'},
            {id:3, name:'Sveta'}
        ]
    }
}

export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        LikesCount:0
    };
    state.profilePage.posts.push(newPost)
}

export default state;
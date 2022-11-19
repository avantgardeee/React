const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            debugger
            let newMessageText = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {
                    id: 4,
                    message: newMessageText
                }]
            }
        default:
            return state;

    }
}
export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE,newMessageText})

export default dialogsReducer;
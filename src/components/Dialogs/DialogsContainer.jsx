import React from "react";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state=props.store.getState().dialogsPage;
    let onAddMessage=()=>{
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange=(text)=>{
        let action=UpdateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }

    return(
        <Dialogs onMessageChange={onMessageChange}
                 onAddMessage={onAddMessage}
                 newMessageText={state.newMessageText}
                 dialogs={state.dialogs}
                 messages={state.messages}
        />
    )

}
export default DialogsContainer;

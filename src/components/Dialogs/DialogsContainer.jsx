import React from "react";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return(
    <StoreContext.Consumer>
        {
        (store)=>{
            let state = store.getState().dialogsPage;
            let onAddMessage = () => {
                store.dispatch(addMessageActionCreator())
            }
            let onMessageChange = (text) => {
                let action = UpdateNewMessageTextActionCreator(text);
                store.dispatch(action);
            }
        return <Dialogs onMessageChange={onMessageChange}
                 onAddMessage={onAddMessage}
                 newMessageText={state.newMessageText}
                 dialogs={state.dialogs}
                 messages={state.messages}
        />}}
    </StoreContext.Consumer>
    )

}
export default DialogsContainer;

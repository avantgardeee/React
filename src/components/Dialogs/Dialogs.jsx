import s from './../Dialogs/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/state";

// newMessageText={m.newMessageText}
// addMessage={props.addMessage}
// updateNewMessageText={props.updateNewMessageText}

const Dialogs = (props) => {

    let dialogsElements=props.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messageElements=props.dialogsPage.messages.map(m=> <Message
        message={m.message}
    />)

    let addMessage=()=>{
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange=(e)=>{
        let text=e.target.value;
        let action=UpdateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <div><textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} placeholder={'Enter your message'}></textarea></div>
            <div><button onClick={addMessage}>Send</button></div>
        </div>

    </div>

    )

}
export default Dialogs;

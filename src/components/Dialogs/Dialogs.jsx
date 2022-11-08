import s from './../Dialogs/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements=state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messageElements=state.messages.map(m=> <Message
        message={m.message}
    />)

    let addMessage=()=>{
        props.onAddMessage();
    }
    let onMessageChange=(e)=>{
        let text=e.target.value;
        props.onMessageChange(text);
    }

    return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <div><textarea onChange={onMessageChange} value={state.newMessageText} placeholder={'Enter your message'}></textarea></div>
            <div><button onClick={addMessage}>Send</button></div>
        </div>

    </div>

    )

}
export default Dialogs;

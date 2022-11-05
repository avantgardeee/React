import s from './../Dialogs/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

// newMessageText={m.newMessageText}
// addMessage={props.addMessage}
// updateNewMessageText={props.updateNewMessageText}

const Dialogs = (props) => {

    let dialogsElements=props.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messageElements=props.dialogsPage.messages.map(m=> <Message
        message={m.message}
    />)

    let newMessage=React.createRef();
    let addMessage=()=>{
        props.dispatch({type:'ADD-MESSAGE'})
    }
    let onMessageChange=()=>{
        let text=newMessage.current.value;
        let action={type:'UPDATE-NEW-MESSAGE-TEXT',newMessage:text};
        props.dispatch(action);
    }

    return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <div><textarea ref={newMessage} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea></div>
            <div><button onClick={addMessage}>Send</button></div>
        </div>

    </div>

    )

}
export default Dialogs;

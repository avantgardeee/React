import s from './../Dialogs/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {FormsControl} from "../common/FormsControls/FormsControls";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements=state.dialogs.map(d=><DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements=state.messages.map(m=> <Message
        message={m.message} key={m.id}
    />)

    let addNewMessage=(values)=>{
        debugger
        props.onAddMessage(values.newMessageText);
    }

    return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>

    </div>
    )
}
const maxLength50=maxLengthCreator(50)
const AddMessageForm=(props)=>{
    return(<form onSubmit={props.handleSubmit}>
        <Field component={FormsControl} name="newMessageText" placeholder={"Enter your message"} validate={[required,maxLength50]} typeField={"textarea"} />
        <div><button>Send</button></div>
    </form>)
}

const AddMessageFormRedux=reduxForm({form:"dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;

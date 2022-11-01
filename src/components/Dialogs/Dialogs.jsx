import s from './../Dialogs/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {messages} from "../../index";
import  {dialogs} from "../../index";


const Dialogs = (props) => {

    let dialogsElements=dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    let messageElements=messages.map(m=> <Message message={m.message}/>)

    return(
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messageElements}
        </div>
    </div>

    )

}
export default Dialogs;

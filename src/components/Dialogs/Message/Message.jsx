import s from './../Dialogs.module.css';

const Message=(props)=>{
    return (<div className={s.message}>
        <img className={s.dialogAvatar}  src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt=""/>
        <div className={`${s.messageText}`}>{props.message}</div>
        {console.log(props.id)}
    </div>)
}


export default Message;

import React from "react";
import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
debugger
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange:(text)=>{
            dispatch(UpdateNewMessageTextActionCreator(text))
        },
        onAddMessage:()=>{
            dispatch(addMessageActionCreator())
        }
    }
}


const DialogsContainer  = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

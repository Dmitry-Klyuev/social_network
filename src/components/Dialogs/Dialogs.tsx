import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DispatchActionType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

type ArrayDialdsType = {
    id: number
    name: string
}
type ArrayMessageType = {
    id: number
    message: string
}

type dialogsObjType = {
    state: {
        dialogs: Array<ArrayDialdsType>
        messages: Array<ArrayMessageType>
        newMessageBody: string
    }
    dispatch: (action: DispatchActionType)=> void
}

export function Dialogs(props: dialogsObjType) {
    debugger
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.state.messages.map(m => (<Message message={m.message}/>))
    let newMassageBody = props.state.newMessageBody

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    let onNewMassageChange = (e:any ) => {
    let body = e.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.textArea}>
                    <input placeholder='Enter you massage'
                           value={newMassageBody}
                           type="text"
                           onChange={onNewMassageChange}
                           />
                    <button onClick={onSendMessageClick}>Add</button>
                </div>
            </div>



        </div>
    )
}
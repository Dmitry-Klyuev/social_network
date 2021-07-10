import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";

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

    }
}

export function Dialogs(props: dialogsObjType) {
    debugger
    let dialogsElements = props.state.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.state.messages.map(m => (<Message message={m.message}/>))


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>

        </div>
    )
}
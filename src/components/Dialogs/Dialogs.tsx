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

type dialogsType = {
    dialogs: Array<ArrayDialdsType>
    messages: Array<ArrayMessageType>
}

export function Dialogs(props:dialogsType) {

    let dialogsElements = props.dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = props.messages.map(m => (<Message message={m.message}/>))


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
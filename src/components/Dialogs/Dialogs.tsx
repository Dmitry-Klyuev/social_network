import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";

export function Dialogs() {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Jenya'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Andrey'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Ok'},

    ]

    let dialogsElements = dialogs.map(d => (<DialogItem name={d.name} id={d.id}/>))
    let messagesElements = messages.map(m => (<Message message={m.message}/>))


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
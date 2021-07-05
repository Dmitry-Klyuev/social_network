import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem = (props:DialogItemType) =>{
    return (
        <div className={s.dialog +' '+ s.active}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

export function Dialogs() {
    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Jenya'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Andrey'},
    ]

    let messageData = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Ok'},

    ]


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
               <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
               <DialogItem name={'Oleg'} id={2}/>
               <DialogItem name={'Jenya'} id={3}/>
               <DialogItem name={'Misha'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={'How are you'}/>
                <Message message={'Ok'}/>
            </div>

        </div>
    )
}
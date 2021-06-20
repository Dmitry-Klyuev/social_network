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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
               <DialogItem name={'Dima'} id={1}/>
               <DialogItem name={'Oleg'} id={2}/>
               <DialogItem name={'Jenya'} id={3}/>
               <DialogItem name={'Misha'} id={4}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you'}/>
                <Message message={'Ok'}/>
            </div>

        </div>
    )
}
import React from "react";
import s from './Dialogs.module.css';
import {Button,  TextField} from "@material-ui/core";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType, MessageType} from "../../redux/types";

type DialogsProps = {
    onNewMassageChange: (body: string) => void
    onSendMessageClick: () => void
    dialogsPage: {
        dialogs: Array<DialogsType>
        messages: Array<MessageType>
        newMessageBody: string
    }
}

export function Dialogs(props: DialogsProps) {

    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.dialogsPage.messages.map( m => <Message message={m.message} />)
    let newMessageBody = props.dialogsPage.newMessageBody

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onNewMassageChange = (e: any) => {
        let body = e.target.value
        props.onNewMassageChange(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div className={s.textArea}>
                    <TextField
                        size="small"
                        variant="filled"
                        placeholder='Enter you massage'
                        value={newMessageBody}
                        type="text"
                        onChange={onNewMassageChange}
                    />
                    <Button variant="contained" color="primary" style={ {margin: '10px'} }  onClick={onSendMessageClick}>Add</Button>
                </div>
            </div>
        </div>
    )
}
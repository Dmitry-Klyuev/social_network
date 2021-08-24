import React from "react";
import s from './Dialogs.module.css';
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogReducer";
import {Button, Input, TextField} from "@material-ui/core";
import {StoreType} from "../../redux/types";
import {Dialogs} from "./Dialogs";

type dialogsObjType = {
    store: StoreType
}

export function DialogsContainer(props: dialogsObjType) {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMassageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs
            onNewMassageChange={onNewMassageChange}
            onSendMessageClick={onSendMessageClick}
            dialogsPage={state}
        />
}
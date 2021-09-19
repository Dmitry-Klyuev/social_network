import {
    DialogsType, MessageType,
    SendMessageCreatorType,
    UpdateNewMessageBodyCreatorType
} from "./types";

type dialogInitialState = typeof initialState

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Jenya'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Andrey'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Ok'},
    ] as Array<MessageType>,
    newMessageBody: ''
}

export type DialogActionType = SendMessageCreatorType | UpdateNewMessageBodyCreatorType

export const dialogsReducer = (state: dialogInitialState = initialState, action: DialogActionType): dialogInitialState=> {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE': {
            return {...state, newMessageBody: action.body}
        }
        case 'SEND-MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: state.newMessageBody}],
                newMessageBody: ''
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = (): SendMessageCreatorType =>
    ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyCreatorType =>
    ({type: 'UPDATE-NEW-MESSAGE', body})


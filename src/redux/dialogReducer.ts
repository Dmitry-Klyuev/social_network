import {
    SendMessageCreatorType,
    UpdateNewMessageBodyCreatorType
} from "./types";

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Jenya'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Andrey'},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Ok'},
    ],
    newMessageBody: ''
}
export type DialogActionType = SendMessageCreatorType | UpdateNewMessageBodyCreatorType

export const dialogsReducer = (state = initialState, action: DialogActionType) => {
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


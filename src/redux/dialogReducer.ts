import {
    SendMessageCreatorType,
    UpdateNewMessageBodyCreatorType
} from "./types";

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let bodyMes = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: bodyMes})
            return state
        default:
            return state
    }
}

export const sendMessageCreator = ():SendMessageCreatorType => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body:string):UpdateNewMessageBodyCreatorType =>
    ({type: UPDATE_NEW_MESSAGE, body: body})
import {addPostActionCreator, ProfileType, setUserProfile, updateNewPostActionCreator} from "./profileReducer";
import {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogReducer";

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

export type RootStateType = {
    profilePage: {
        postsData: Array<PostDataType>
        newPostText: string
        profile: null
    }
    dialogsPage: {
        dialogs: Array<DialogsType>
        messages: Array<MessageType>
        newMessageBody: string
    }
    sidebar: {}
    usersPage: {}
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    DispatchAddPostType
    | DispatchUpdatePostType
    | SendMessageCreatorType
    | UpdateNewMessageBodyCreatorType
    | SetUserProfileActionType

export type DispatchAddPostType = ReturnType<typeof addPostActionCreator>
export type DispatchUpdatePostType = ReturnType<typeof updateNewPostActionCreator>
export type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
export type UpdateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>


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
        }
        dialogsPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessageType>
            newMessageBody: string
        }
        sidebar: {}
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

type ActionsType = DispatchAddPostType | DispatchUpdatePostType | SendMessageCreatorType | UpdateNewMessageBodyCreatorType
export type DispatchAddPostType = {
    type: 'ADD-POST'
}

export type DispatchUpdatePostType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}

export type SendMessageCreatorType = {
    type: 'SEND-MESSAGE'
}

export type UpdateNewMessageBodyCreatorType = {
    type: 'UPDATE-NEW-MESSAGE'
    body: string
}


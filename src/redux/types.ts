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
        }
        sidebar: {}
}
export type DispatchAddPostType = {
    type: 'ADD-POST'
}

export type DispatchUpdatePostType = {
    type: 'UPDATE-NEW-POST'
    newText: string
}
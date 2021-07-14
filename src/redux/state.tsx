import {DialogsType, MessageType, PostDataType, RootStateType} from "./types";

export let store : StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hello guys', likesCount: 15},
                {id: 2, message: 'My name is Gena', likesCount: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ]
        },
        sidebar: {}
    },
    getState () {
        return this._state
    },
    renderEntireTree () {
        console.log('stateaaa')
    },
    addPost () {
        let newPost = {
            id: this._state.profilePage.postsData.length,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this.renderEntireTree()
    },
    updateNewPostText  (newText: string) {
        this._state.profilePage.newPostText = newText
        this.renderEntireTree()
    },
    subscribe (observer: () => void) {
        this.renderEntireTree = observer
    }
}

export type StoreType = {
    _state: RootStateType
    getState: ()=> void
    renderEntireTree: ()=>void
    addPost: ()=>void
    updateNewPostText: (newText: string)=> void
    subscribe: (observer: any)=> void
}


export default store;
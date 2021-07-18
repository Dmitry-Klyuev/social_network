import {DispatchAddPostType, DispatchUpdatePostType, RootStateType} from "./types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export let store: StoreType = {
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
    getState() {
        return this._state
    },
    renderEntireTree() {
        console.log('stateaaa')
    },
    subscribe(observer: () => void) {
        this.renderEntireTree = observer
    },
    dispatch(action: DispatchActionType) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.postsData.length,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this.renderEntireTree()
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.newText
            this.renderEntireTree()
        }
    }
}

export const addPostActionCreator = (): DispatchAddPostType => ({type: ADD_POST})

export const updateNewPostActionCreator = (text: string): DispatchUpdatePostType =>
    ({type: UPDATE_NEW_POST, newText: text})


export type DispatchActionType = DispatchAddPostType | DispatchUpdatePostType


export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    renderEntireTree: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: DispatchActionType) => void
}


export default store;
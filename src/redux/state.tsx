import {renderEntireTree} from "../render";

export let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: state.profilePage.postsData.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export default state;
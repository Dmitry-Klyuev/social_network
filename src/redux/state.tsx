let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hello guys', likesCount: 15},
            {id: 2, message: 'My name is Dima\'', likesCount: 15},
        ],
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

export let addPost = (postMessage:string | undefined) => {
    if (postMessage){
        state.profilePage.postsData.push({id: 5,
            message: postMessage,
            likesCount: 0
        })
    }
}

export default state;
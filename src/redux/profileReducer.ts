import {DispatchAddPostType, DispatchUpdatePostType, PostDataType} from "./types";

type StateType = {
    postsData: Array<PostDataType>
    newPostText: string
}

type ProfileActionType = DispatchAddPostType | DispatchUpdatePostType


let initialState = {
    postsData: [
        {id: 1, message: 'Hello guys', likesCount: 15},
        {id: 2, message: 'My name is Gena', likesCount: 15},
    ],
    newPostText: ''
}

export const profileReducer = (state: StateType  = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            let copyState = {...state}
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            copyState.postsData = [...state.postsData]
            copyState.postsData.push(newPost)
            copyState.newPostText = '';
            return copyState
        }
        case 'UPDATE-NEW-POST': {
            let copyState = {...state}
            copyState.newPostText = action.newText
            return copyState
        }
        default:
            return state
    }
}

export const addPostActionCreator = (): DispatchAddPostType => ({type: 'ADD-POST'})

export const updateNewPostActionCreator = (newText: string): DispatchUpdatePostType =>
    ({type: 'UPDATE-NEW-POST', newText})
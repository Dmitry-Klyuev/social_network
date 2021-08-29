import {DispatchAddPostType, DispatchUpdatePostType, PostDataType} from "./types";

type StateType = {
    postsData: Array<PostDataType>
    newPostText: string
}

export type ProfileActionType = DispatchAddPostType | DispatchUpdatePostType


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
            return {
                ...state,
                postsData: [...state.postsData, {id: 6, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        }
        case 'UPDATE-NEW-POST': {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (): DispatchAddPostType => ({type: 'ADD-POST'})

export const updateNewPostActionCreator = (newText: string): DispatchUpdatePostType =>
    ({type: 'UPDATE-NEW-POST', newText})
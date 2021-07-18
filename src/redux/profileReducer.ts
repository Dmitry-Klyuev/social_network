import {DispatchAddPostType, DispatchUpdatePostType} from "./types";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const profileReducer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): DispatchAddPostType => ({type: ADD_POST})

export const updateNewPostActionCreator = (text: string): DispatchUpdatePostType =>
    ({type: UPDATE_NEW_POST, newText: text})
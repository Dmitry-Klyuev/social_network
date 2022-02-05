import {DispatchAddPostType, DispatchUpdatePostType, PostDataType, SetUserProfileActionType} from "./types";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

export type ProfileActionType = DispatchAddPostType | DispatchUpdatePostType | SetUserProfileActionType

type ProfileInitialState = {
    postsData: Array<PostsType>
    newPostText: string,
    profile: ProfileType | null
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState = {
    postsData: [
        {id: 1, message: 'Hello guys', likesCount: 15},
        {id: 2, message: 'My name is Gena', likesCount: 15},
    ] as Array<PostDataType>,
    newPostText: '',
    profile: null
}

export const profileReducer = (state: ProfileInitialState  = initialState, action: ProfileActionType): ProfileInitialState => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 6, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'} as const)
export const updateNewPostActionCreator = (newText: string) => ({type: 'UPDATE-NEW-POST', newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)


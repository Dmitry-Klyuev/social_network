import React from "react";
import {Post} from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import {Button, Input, TextField} from "@material-ui/core";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/types";


export type ArrayMyPostsType = {
    id: number
    message: string
    likesCount: number
}
type myPostsType = {
    store: StoreType
}


export function MyPostsContainer(props: myPostsType) {
    let state = props.store.getState()
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text: string) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPost={onPostChange}
                     AddPost={onAddPost}
                     newPostText={state.profilePage.newPostText}
                     post={state.profilePage.postsData}
    />)
}



import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ActionsType, RootStateType} from "../../../redux/types";
import {connect} from "react-redux";

let mapStateToProps = (state:RootStateType) => {
    return {
        newPostText: state.profilePage.newPostText,
        post: state.profilePage.postsData,
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
    return {
        updateNewPost: (text: string)=> {
            let action = updateNewPostActionCreator(text);
            dispatch(action)
        },
        AddPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

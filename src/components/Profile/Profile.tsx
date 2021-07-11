import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ArrayMyPostsType ={
    id: number
    message: string
    likesCount: number
}

type profileType ={
    profilePage: {
        postsData: Array<ArrayMyPostsType>
        newPostText: string
    }
    addPost: () => void
    updateNewPostText: (newText: string)=> void
}

export function Profile(props:profileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ArrayProfileType ={
    id: number
    message: string
    likesCount: number
}

type profileType ={
    state: {
        postsData: Array<ArrayProfileType>
    }
    addPost: (postMessage:string) => void
}

export function Profile(props:profileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}
                     addPost={props.addPost}
            />
        </div>
    )
}

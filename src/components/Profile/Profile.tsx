import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchActionType} from "../../redux/store";

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
    dispatch: (action: DispatchActionType)=> void
}

export function Profile(props:profileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

import React from "react";
import s from './Profile.module.css';
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
}

export function Profile(props:profileType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}
            />
        </div>
    )
}

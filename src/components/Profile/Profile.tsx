import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {

    let postsData = [
        {id: 1, message: 'Hello guys', likesCount: 15},
        {id: 2, message: 'My name is Dima\'', likesCount: 15},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
            />
        </div>
    )
}

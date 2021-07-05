import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


export function MyPosts() {

    let postsData = [
        {id: 1, message: 'Hello guys', likesCount: 15},
        {id: 2, message: 'My name is Dima\'', likesCount: 15},
    ]

    let post = postsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My post</h3>
                <div>
                    New post
                </div>
                <div>  {/*ниже пойдут посты*/}
                    <div>
                        <input type="text"/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                    {/*Выводим посты с лайками*/}
                    {post}

                </div>
            </div>
        </div>
    )
}
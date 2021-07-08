import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

type ArrayMyPostsType = {
    id: number
    message: string
    likesCount: number
}
type myPostsType = {
    postsData: Array<ArrayMyPostsType>
}

export function MyPosts(props: myPostsType) {

    let post = props.postsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

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
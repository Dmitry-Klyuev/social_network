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
    addPost: (postMessage:string | undefined) => void
}

export function MyPosts(props: myPostsType) {

    let newPostElement = React.createRef<HTMLInputElement>()

    let post = props.postsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let onAddPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My post</h3>
                <div >
                    New post
                </div>
                <div>  {/*ниже пойдут посты*/}
                    <div>
                        <input type="text" ref={newPostElement}/>
                    </div>
                    <div>
                        <button onClick={ onAddPost}>Add post</button>
                    </div>
                    {/*Выводим посты с лайками*/}
                    {post}

                </div>
            </div>
        </div>
    )
}
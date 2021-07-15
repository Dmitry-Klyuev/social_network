import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {addPostActionCreator, DispatchActionType, updateNewPostActionCreator} from "../../../redux/state";


type ArrayMyPostsType = {
    id: number
    message: string
    likesCount: number
}
type myPostsType = {
    profilePage: {
        postsData: Array<ArrayMyPostsType>
        newPostText: string
    }
    dispatch: (action: DispatchActionType)=> void
}




export function MyPosts(props: myPostsType) {

    let newPostElement = React.createRef<HTMLInputElement>()

    let post = props.profilePage.postsData.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let onAddPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
        if (text){
            props.dispatch(updateNewPostActionCreator(text))
        }
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My post</h3>
                <div >
                    New post
                </div>
                <div>  {/*post*/}
                    <div>
                        <input type="text" ref={newPostElement}
                               onChange={onPostChange}
                               value={props.profilePage.newPostText}

                        />
                    </div>
                    <div>
                        <button onClick={ onAddPost}>Add post</button>
                    </div>
                    {/*post and likes*/}
                    {post}

                </div>
            </div>
        </div>
    )
}



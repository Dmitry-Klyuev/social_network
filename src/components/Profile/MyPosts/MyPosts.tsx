import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {Button, TextField} from "@material-ui/core";
import {PostDataType} from "../../../redux/types";



type myPostsType = {
    updateNewPost: (text: string) => void
    AddPost: ()=> void
    post: Array<PostDataType>
    newPostText: string
}

export function MyPosts(props: myPostsType) {

    let newPostElement = React.createRef<HTMLInputElement>()

    let post = props.post.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let onAddPost = () => {
        props.AddPost()
    }

    let onPostChange = (e: any) => {
        let text = e.target.value
        props.updateNewPost(text)
    }

    return (
        <div className={s.myPosts}>
            <div>
                <h3>My post</h3>
                <div>
                    New post
                </div>
                <div>  {/*post*/}
                    <div>
                        <TextField size="small"
                                   variant="filled"
                                   label="Add message"
                                   type="text" ref={newPostElement}
                                   onChange={onPostChange}
                                   value={props.newPostText}
                        />
                    </div>
                    <div>
                        <Button variant="contained" color="primary"
                                style={ {marginTop: '10px'} }
                                onClick={onAddPost}>Add post</Button>
                    </div>
                    {/*post and likes*/}
                    {post}

                </div>
            </div>
        </div>
    )
}



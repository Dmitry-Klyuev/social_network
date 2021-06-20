import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'


export function MyPosts() {
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

                    <Post message={'Hello guys'} likeCount={15}/>
                    <Post message={'My name is Dima'} likeCount={20}/>
                </div>
            </div>
        </div>
    )
}
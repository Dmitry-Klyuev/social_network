import React from "react";
import {Post} from "./Post/Post";


export function MyPosts() {
    return (
        <div>
            <div>
                My post
            <div>
                New post
            </div>
             <div>  {/*ниже пойдут посты*/}
                 <input type="text" />
                 <button>Add post</button>
                 <Post message={'Hello guys'} likeCount={15}/>
                 <Post message={'My name is Dima'} likeCount={20}/>
             </div>
            </div>
        </div>
    )
}
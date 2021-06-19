import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string;
    likeCount: number;
}

export function Post(props:PostType){
    return(
            <div className={s.post}>
                <img src="https://www.vokrug.tv/pic/person/c/f/7/d/cf7d537c144e7ffcdc5db7270211cd57.jpeg" alt=""/>
                {props.message}
                <div>
                    <span>Like {props.likeCount}</span>
                </div>
            </div>
    )
}
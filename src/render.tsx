import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {updateNewPostText} from "./redux/state";

type postDataType = {
    id: number
    message: string
    likesCount: number
}

type dialogsType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

type stateType = {
    profilePage: {
        postsData: Array<postDataType>
        newPostText: string
    }
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messageType>
    }
    sidebar: {}
}


export const renderEntireTree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

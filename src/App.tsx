import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from "./components/Setting/Setting";

type ArrayPostsDataType ={
    id: number
    message: string
    likesCount: number
}

type ArrayDialogstype ={
    id: number
    name: string
}

type ArrayMessagesType ={
    id:number
    message: string
}

type appType = {
    postsData: Array<ArrayPostsDataType>
    dialogs: Array<ArrayDialogstype>
    messages: Array<ArrayMessagesType>
}

function App(props:appType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Redirect from='/' to='/profile'/>
                    <Route path='/profile' render={() => <Profile postsData={props.postsData} />}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs}
                                                                  messages={props.messages} />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

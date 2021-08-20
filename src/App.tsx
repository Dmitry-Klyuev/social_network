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
import {DispatchActionType} from "./redux/store";

export type ArrayPostsDataType ={
    id: number
    message: string
    likesCount: number
}

type ArrayDialogsType ={
    id: number
    name: string
}

type ArrayMessagesType ={
    id:number
    message: string
}

export type AppPropsType = {
    state: {
        profilePage: {
            postsData: Array<ArrayPostsDataType>
            newPostText: string
        }
        dialogsPage: {
            dialogs: Array<ArrayDialogsType>
            messages: Array<ArrayMessagesType>
            newMessageBody: string
        }
    }
    dispatch: (action: DispatchActionType)=> void
}


function App(props:AppPropsType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Redirect from='/' to='/profile'/>

                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

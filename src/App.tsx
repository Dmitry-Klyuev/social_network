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
import {Container, Grid, Paper} from '@material-ui/core';
import {StoreType} from "./redux/types";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type AppPropsType = {
    store: any
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'background'}>
            <BrowserRouter>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Header/>
                        </Grid>
                        <Grid item xs={3}>
                            <Paper elevation={3}>
                                <Navbar/>
                            </Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Paper elevation={3}>
                                <Redirect from='/' to='/profile'/>

                                <Route path='/profile' render={() => <Profile
                                    store={props.store}
                                />}/>
                                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}
                                                                              />}/>
                                <Route path='/news' render={() => <News/>}/>
                                <Route path='/music' render={() => <Music/>}/>
                                <Route path='/setting' render={() => <Setting/>}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </BrowserRouter>
        </div>
    )
}
export default App;

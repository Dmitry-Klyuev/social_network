import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Setting} from "./components/Setting/Setting";
import {Container, Grid, Paper} from '@material-ui/core';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// export type AppPropsType = {
//     store: any
// }

const App: React.FC = () => {
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

                                <Route path='/profile' render={() => <Profile/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/users' render={ ()=> <UsersContainer/> } />
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
